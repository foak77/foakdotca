import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoDb/dbConnect";
import Onportfolios from "../../../models/onportfolioModel";

export async function GET() {
  try {
    await dbConnect();
    const onportfolios = await Onportfolios.find();
    return NextResponse.json({ onportfolios }, { status: 200 });
  } catch (error) {
    return NextResponse.json("💥💥💥 ERROR in Fetchin workplaces" + error, {
      status: 500,
    });
  }
}
