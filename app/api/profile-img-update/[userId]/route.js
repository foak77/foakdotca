import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongoDb/dbConnect";
import User from "../../../../models/userModel";

export async function POST(request, { params }) {
  const { userId } = params;
  const { tempImg } = await request.json();

  // console.log("NEWIMAGE", tempImg);

  await dbConnect();

  const user = await User.findById(userId);
  // console.log("user", user);

  if (!user) {
    return NextResponse.json({
      message: "💥💥💥 USER NOT FOUND OR SESSION EXPIRED",
      error: true,
      status: 401,
    });
  }

  user.profileImg = tempImg;

  await user.save();

  // console.log("UPDATED USER", user);

  return NextResponse.json({
    message: "🌟🌟🌟 PICTURE SAVED!",
    error: false,
    status: 200,
    user: user,
    // url: response.secure_url,
  });
}
