import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongoDb/dbConnect";
import User from "../../../../models/userModel";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request, { params }) {
  const { userId } = params;
  const data = await request.formData();
  const file = data.get("file");

  // console.log("data", data);
  // console.log("file", file);
  // console.log("params", userId);

  await dbConnect();

  const user = await User.findById(userId);

  if (!user) {
    return NextResponse.json({
      message: "💥💥💥 USER NOT FOUND OR SESSION EXPIRED",
      error: true,
      status: 401,
    });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  // console.log("BUFFER", buffer);

  const filePath = path.join(
    process.cwd(),
    "public/images/profile-img/tmp",
    file.name
  );
  // console.log("FILEPATH", filePath);

  await writeFile(filePath, buffer);
  user.profileTmpImg = filePath;

  // var pathUrl = filePath.split("/public");
  // pathUrl = pathUrl[1];
  // console.log("PATH URL", pathUrl);
  // user.profileTmpImg = pathUrl;

  await user.save();

  return NextResponse.json({
    message: "🌟🌟🌟 SUCCESS! DON'T FORGET TO SAVE IT",
    error: false,
    status: 200,
    TmpImagePath: filePath,
  });
}

// var pathUrl = filePath.split("/public");
// pathUrl = pathUrl[1];
// console.log("PATH URL", pathUrl);
// user.profileTmpImg = pathUrl;
