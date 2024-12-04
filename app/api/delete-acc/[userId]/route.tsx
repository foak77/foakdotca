import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongoDb/dbConnect";
import User from "../../../../models/userModel";
var bcrypt = require("bcryptjs");
const crypto = require("crypto");
import { logout } from "./../../../../lib/sectionRelated/getUpdateDeleteSection";

export async function PATCH(req: NextRequest, res: NextResponse) {
  try {
    const { password, userId } = await req.json();
    console.log("PASSWORD, ID", password, userId);

    await dbConnect();

    var user = await User.findById(userId).select("+status +password");
    if (!user || !user.status) {
      return NextResponse.json({
        message: "💥 USER NOT FOUND OR SESSION EXPIRED",
        error: true,
        status: 401,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json({
        message: "💥 WRONG PASSWORD OR SESSION EXPIRED",
        error: true,
        status: 401,
      });
    }

    logout(); // Ensure this function works correctly
    user.status = false;
    user.active = false;
    user.oldEmail = user.email;
    user.email = crypto.randomBytes(16).toString("hex");
    await user.save();

    return NextResponse.json({
      message: "👋 USER DELETED",
      error: false,
      status: 200,
    });
  } catch (error) {
    console.error("Error in PATCH handler:", error);
    return NextResponse.json({
      message: "💥 INTERNAL SERVER ERROR",
      error: true,
      status: 500,
    });
  }
}

// export async function PATCH(req: NextRequest, res: NextResponse) {
//   const { password, userId } = await req.json();
//   console.log("PASSWORD,ID", password, userId);
//   await dbConnect();

//   var user = await User.findById(userId).select("+status").select("+password");
//   console.log("USER P DELETAR", user);
//   if (!(user || user.status)) {
//     return NextResponse.json({
//       message: "💥 USER NOT FOUND OR SESSION EXPIRED",
//       error: true,
//       status: 401,
//     });
//   } else if (!(await bcrypt.compare(password, user.password))) {
//     return NextResponse.json({
//       message: "💥 WRONG PASSWORD OR SESSION EXPIRED",
//       error: true,
//       status: 401,
//     });
//   } else {
//     logout();
//     user.status = false;
//     user.active = false;
//     user.oldEmail = user.email;
//     user.email = crypto.randomBytes(16).toString("hex");
//     await user.save();
//     return NextResponse.json({
//       message: "👋 USER DELETED",
//       error: false,
//       status: 200,
//     });
//   }
// }
