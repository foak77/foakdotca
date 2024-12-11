import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/mongoDb/dbConnect";
import User from "../../../models/userModel";
import {
  encrypt,
  decrypt,
} from "../../../lib/sectionRelated/getUpdateDeleteSection";
var bcrypt = require("bcryptjs");
import { cookies } from "next/headers";

// CREATE USER
export async function POST(req: NextRequest) {
  let { name, email, password, passwordConfirm } = await req.json();

  if (!name || !email || !password || !passwordConfirm) {
    return NextResponse.json(
      { message: "💥 MISSING SOME INFORMATION", error: true },
      { status: 400 } // Use a valid status code for bad requests
    );
  }

  if (password !== passwordConfirm) {
    return NextResponse.json(
      { message: "💥 THE PASSWORDS AREN'T MATCHING", error: true },
      { status: 401 }
    );
  } else {
    password = await bcrypt.hash(password, 12);
    let userInfo = {
      name: name,
      email: email,
      password: password,
      createdAt: Date.now(),
      modifiedAt: Date.now(),
      active: true,
    };

    await dbConnect();

    let verEmail = await User.findOne({ email: email });

    if (verEmail) {
      return NextResponse.json(
        { message: "💥 USE DIFFERENT EMAIL", error: true },
        { status: 401 }
      );
    }

    let user = await User.create(userInfo);

    // CREATE TOKEN
    let expiresToken = Date.now() + 60 * 60 * 1000; // 1 hour
    const token = await encrypt({ user, expires: expiresToken });

    // CREATE COOKIE
    const expiresCookies = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    cookies().set("cookie", token, {
      expires: expiresCookies,
      httpOnly: true,
    });

    return NextResponse.json(
      {
        user,
        token,
        error: false,
        message: "🤩 USER CREATED WITH SUCCESS",
      },
      { status: 201 }
    );
  }
}
