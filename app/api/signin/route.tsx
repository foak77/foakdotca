import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/mongoDb/dbConnect";
import User from "../../../models/userModel";
import {
  encrypt,
  decrypt,
} from "../../../lib/sectionRelated/getUpdateDeleteSection";
var bcrypt = require("bcryptjs");
import { cookies } from "next/headers";

// SIGN IN
export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({
      message: "💥 USER / PASSWORD NOT PROVIDED",
      error: true,
      status: 401,
    });
  }

  await dbConnect();

  const user = await User.findOne({ email: email })
    .select("+password")
    .select("+active");

  if (!user) {
    return NextResponse.json({
      message: "💥 USER / PASSWORD INCORRECT",
      error: true,
      status: 401,
    });
  }
  // CHECK IF PW AND PWC ARE OK (encripted)
  if (!(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({
      message: "💥 USER / PASSWORD INCORRECT",
      error: true,
      status: 401,
    });
  }
  // check if user ACTIVE is TRUE
  if (!user.active) {
    return NextResponse.json({
      message: "💥 NEED TO REACTIVATE ACCOUNT",
      error: true,
      status: 401,
    });
  }

  // CREATE TOKEN
  let expiresToken = Date.now() + 60 * 60 * 1000; // 1h
  const token = await encrypt({ user, expires: expiresToken });

  // CREATE COOKIE
  const expiresCookies = Date.now() + 60 * 60 * 1000; // 1h
  cookies().set("cookie", token, {
    expires: expiresCookies,
    httpOnly: true,
    // sameSite: "none",
    // secure: true,
  });

  return NextResponse.json({
    user,
    token,
    status: 201,
    error: false,
    message: "🤩 USER LOGGED IN WITH SUCCESS",
  });
}
