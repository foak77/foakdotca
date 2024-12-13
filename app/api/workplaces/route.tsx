import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongoDb/dbConnect";
import Workplaces from "../../../models/workplaceModel";

export async function GET() {
  try {
    await dbConnect();

    // Fetch workplaces
    const workplaces = await Workplaces.find();

    // If no workplaces found, return a 404-like response
    if (workplaces.length === 0) {
      return NextResponse.json({
        message: "No workplaces found",
        error: false,
        status: 404,
      });
    }

    return NextResponse.json({
      workplaces,
      message: "Workplaces found successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching workplaces:", error);
    return NextResponse.json({
      message: "💥 Error fetching workplaces data.",
      error: true,
      status: 500,
    });
  }
}
