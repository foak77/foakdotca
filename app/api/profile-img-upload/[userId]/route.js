import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongoDb/dbConnect";
import User from "../../../../models/userModel";
import { writeFile } from "fs/promises";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.ClOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.ClOUDINARY_API_SECRET,
// });

// console.log(process.env.CLOUDINARY_API_KEY);
// console.log(process.env.ClOUDINARY_API_SECRET);

cloudinary.config({
  cloud_name: "foak",
  api_key: "444431827793635",
  api_secret: "jhzsDuPi21d1WkfdFozLKO2aSUM",
});

export async function POST(request, { params }) {
  const { userId } = params;
  const data = await request.formData();
  const image = data.get("file");

  // console.log("IMAGE", image);
  // console.log("params", userId);

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

  if (!image) {
    return NextResponse.json({
      message: "💥💥💥 NO IMAGE UPLOADED OR SESSION EXPIRED",
      error: true,
      status: 401,
    });
  }

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filePath = path.join(
    process.cwd(),
    "public/images/profile-img/tmp",
    image.name
  );

  // console.log("FILEPATH", filePath);

  await writeFile(filePath, buffer);

  const response = await cloudinary.uploader.upload(filePath);

  // console.log("RESPONSE CLOUDINARY", response);

  return NextResponse.json({
    message: "🌟🌟🌟 PICTURE UPDLOADED DON'T FORGET TO SAVE IT !",
    error: false,
    status: 200,
    url: response.secure_url,
  });
}
