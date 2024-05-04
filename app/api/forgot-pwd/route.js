import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoDb/dbConnect";
import User from "./../../../models/userModel";
const mail = require("@sendgrid/mail");
var bcrypt = require("bcryptjs");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const body = await request.json();
  // console.log(body);
  await dbConnect();

  const randomKey = body.code;
  const email = body.email;
  const password = body.password;
  const passwordConfirm = body.passwordConfirm;

  const user = await User.findOne({ email: email });

  if (!user) {
    return NextResponse.json({
      message: "💥💥💥 EMAIL NOT REGISTERED",
      error: true,
      status: 401,
    });
  }

  if (!(password === passwordConfirm)) {
    return NextResponse.json({
      message: "💥💥💥 PASSWORDS AREN'T MATCHING",
      error: true,
      status: 401,
    });
  }

  if (!(randomKey === user.randomKey && Date.now() <= user.timeToActivate)) {
    return NextResponse.json({
      message: "💥💥💥 EITHER WRONG KEY or TIME EXPIRED - TRY AGAIN",
      error: true,
      status: 401,
    });
  }

  user.password = await bcrypt.hash(password, 12);
  user.modifiedAt = Date.now();
  await user.save();

  return NextResponse.json({
    message: `🌟🌟🌟 ${user.name}, YOUR PASSWORD IS UPDATED`,
    error: false,
    status: 200,
  });
}
