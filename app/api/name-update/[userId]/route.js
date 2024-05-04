import { NextResponse } from "next/server";
import User from "../../../../models/userModel";
import dbConnect from "../../../../lib/mongoDb/dbConnect";

export async function PUT(request) {
  let { name, id } = await request.json();

  await dbConnect();
  let user = await User.findOne({ _id: id });

  if (name !== "") {
    user.name = name;
  }
  await user.save();

  return NextResponse.json({
    message: "🤩 USER NAME UPDATED WITH SUCESS",
    user,
    error: false,
  });
}
