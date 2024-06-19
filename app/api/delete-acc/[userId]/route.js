import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongoDb/dbConnect";
import User from "../../../../models/userModel";
var bcrypt = require("bcryptjs");
const crypto = require("crypto");
import { logout } from "./../../../../lib/sectionRelated/getUpdateDeleteSection";

export async function PATCH(request) {
  const { password, userId } = await request.json();

  await dbConnect();

  const user = await User.findById(userId)
    .select("+status")
    .select("+password");

  console.log("USER", user);

  if (!(user || status)) {
    return NextResponse.json({
      message: "💥 USER NOT FOUND OR SESSION EXPIRED",
      error: true,
      status: 401,
    });
  } else if (!(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({
      message: "💥 WRONG PASSWORD OR SESSION EXPIRED",
      error: true,
      status: 401,
    });
  } else {
    logout();
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
  }
}
