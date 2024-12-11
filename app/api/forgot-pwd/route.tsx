import { HydratedDocument } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/mongoDb/dbConnect";
import User from "../../../models/userModel";
import mail from "@sendgrid/mail";
import bcrypt from "bcryptjs";

mail.setApiKey(process.env.SENDGRID_API_KEY);

type UserTypes = {
  name: string;
  randomKey: string;
  timeToActivate: Date;
  modifiedAt: Date;
  password: string;
};

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const body: {
      code: string;
      email: string;
      password: string;
      passwordConfirm: string;
    } = await req.json();

    // Database connection
    await dbConnect();

    const { code: randomKey, email, password, passwordConfirm } = body;

    // Find the user and ensure required fields are selected
    const user: HydratedDocument<UserTypes> | null = await User.findOne({
      email,
    }).select("+randomKey +password");

    if (!user) {
      return NextResponse.json({
        message: "💥💥💥 EMAIL NOT REGISTERED",
        error: true,
        status: 401,
      });
    }

    // Check if passwords match
    if (password !== passwordConfirm) {
      return NextResponse.json({
        message: "💥💥💥 PASSWORDS AREN'T MATCHING",
        error: true,
        status: 401,
      });
    }

    // Validate randomKey and activation time
    const isKeyValid =
      randomKey === user.randomKey &&
      Date.now() <= new Date(user.timeToActivate).getTime();

    if (!isKeyValid) {
      return NextResponse.json({
        message: "💥💥💥 EITHER WRONG KEY OR TIME EXPIRED - TRY AGAIN",
        error: true,
        status: 401,
      });
    }

    // Update user password
    user.password = await bcrypt.hash(password, 12);
    user.modifiedAt = new Date();
    await user.save();

    // Return success response
    return NextResponse.json({
      message: `🌟🌟🌟 ${user.name}, YOUR PASSWORD IS UPDATED`,
      error: false,
      status: 200,
    });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({
      message: "💥💥💥 INTERNAL SERVER ERROR",
      error: true,
      status: 500,
    });
  }
}
