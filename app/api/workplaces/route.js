import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoDb/dbConnect";
import Workplaces from "./../../../models/workplaceModel";

export async function GET() {
  await dbConnect();
  const workplaces = await Workplaces.find();

  // console.log("WORPLACES ROUTE", workplaces);

  if (!workplaces) {
    return NextResponse.json({
      message: "💥💥💥 ERROR IN FETCHING",
      error: true,
      status: 500,
    });
  }

  return NextResponse.json({
    workplaces,
    message: "🌟🌟🌟 WORKPLACES FOUND",
    status: 200,
  });
}
