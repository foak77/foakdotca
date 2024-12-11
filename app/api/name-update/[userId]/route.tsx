import { NextRequest, NextResponse } from "next/server";
import User from "../../../../models/userModel";
import dbConnect from "../../../../lib/mongoDb/dbConnect";
import { HydratedDocument } from "mongoose"; // Import HydratedDocument

type UserTypes = {
  name: string;
  _id: string;
};

export async function PUT(req: NextRequest, res: NextResponse) {
  let { name, id } = await req.json();

  await dbConnect();

  let user: HydratedDocument<UserTypes> | null = await User.findOne({
    _id: id,
  });

  if (!user) {
    return NextResponse.json({
      message: "💥 User not found",
      error: true,
      status: 404,
    });
  }

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
