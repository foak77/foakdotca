import { NextResponse } from "next/server";
import dbConnect from "./../../../lib/mongoDb/dbConnect";
import User from "./../../../models/userModel";
const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

// GENERATE RANDOM KEY FOR AUTENTICATION
const keyMaker = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// FIND BY EMAIL
export async function POST(request) {
  const { email } = await request.json();
  var ResponseData = {
    status: "",
    message: "",
  };
  let response = ResponseData;

  if (!email) {
    return NextResponse.json({
      message: "💥💥💥 PROVIDE EMAIL",
      error: true,
      status: 401,
    });
  }

  await dbConnect();

  const user = await User.findOne({ email: email });

  if (!user) {
    return NextResponse.json({
      message: "💥💥💥 EMAIL DOESN'T EXIST IN THE SYSTEM",
      error: true,
      status: 401,
    });
  }

  // GENERATE RANDOM KEY
  let randomKey = keyMaker(5);
  user.randomKey = randomKey;
  user.timeToActivate = Date.now() + 60 * 60 * 1000; // 1h
  await user.save();

  const data = {
    to: user.email,
    // to: "emailtofred@gmail.com",
    from: process.env.SENDGRID_EMAIL_FROM,
    subject: "Reset Password",
    text: `Copy code = ${randomKey}`,
    html: `<p>Copy and paste the CODE</p>
    <h2><strong>${randomKey}</strong></h2>`,
  };

  await mail
    .send(data)
    .then(() => {
      response = {
        status: "success",
        message: "Your message was sent. I'll be in contact shortly.",
      };
    })
    .catch((error) => {
      response = {
        status: "error",
        message: `Message failed to send with error, ${error}`,
      };
    });

  return NextResponse.json({
    user,
    status: 201,
    error: false,
    message: "🌟🌟🌟 CHECK YOUR EMAIL - THE CODE WILL EXPIRE IN 1 HOUR",
  });
}
