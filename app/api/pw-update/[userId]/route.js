import { NextResponse } from "next/server";
import User from "./../../../../models/userModel";
import dbConnect from "./../../../../lib/mongoDb/dbConnect";
const bcrypt = require("bcryptjs");

//TO UPDATE PASSWORD
export async function POST(request) {
  const { user_id, password, newPassword, newPasswordConfirm } =
    await request.json();

  await dbConnect();

  // 1) USER IS ALREADY LOGGED IN -> Get user based on the email
  const user = await User.findOne({ _id: user_id }).select("+password");

  // 2) IF PASSWORD IS EQUAL TO THE PW IN THE SYSTME
  if (!(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({
      message: "💥 INVALID PASSWORD OR SESSION EXPIRED",
      error: true,
      status: 401,
    });
  }
  // COMPARING NEW PW to NEW PWC
  if (!(newPassword === newPasswordConfirm)) {
    return NextResponse.json({
      message: "💥 PASSWORDS AREN'T MATCHING OR SESSION EXPIRED",
      error: true,
      status: 401,
    });
  } else {
    // 3) IF OK than update
    user.password = await bcrypt.hash(newPassword, 12);
    user.modifiedAt = Date.now();

    await user.save();

    return NextResponse.json({
      message: "🤩 PASSWORD UPDATED WITH SUCCESS",
      error: false,
      status: 201,
    });
  }
}
