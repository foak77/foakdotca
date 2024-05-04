import { NextResponse } from "next/server";
const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

var ResponseData = {
  status: "",
  message: "",
};

export async function POST(request) {
  let response = ResponseData;
  const body = await request.json();

  const message = {
    name: body.contact.name,
    email: body.contact.email,
    subject: body.contact.subject,
    message: body.contact.message,
  };

  const data = {
    to: process.env.SENDGRID_EMAIL_TO,
    from: process.env.SENDGRID_EMAIL_FROM,
    subject: body.contact.subject,
    text: body.contact.message,
    html: `<h2>My name is ${body.contact.name}</h2>
    <p>My email is ${body.contact.email}</p>
    <p>${body.contact.message}</p>`,
  };

  // console.log("DATA", data);

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

  // console.log("RESPONSE FROM ROUTE", response);
  return NextResponse.json(response);
}
