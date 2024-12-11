import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongoDb/dbConnect";
import Onportfolios, {
  OnportfolioDocument,
} from "../../../models/onportfolioModel";
import { HydratedDocument } from "mongoose";

export async function GET() {
  try {
    await dbConnect();

    // Properly type the result of the find() query
    const onportfolios: HydratedDocument<OnportfolioDocument>[] =
      await Onportfolios.find();

    return NextResponse.json({ onportfolios }, { status: 200 });
  } catch (error) {
    console.error("💥💥💥 ERROR in Fetching workplaces:", error);
    return NextResponse.json("💥💥💥 ERROR in Fetching workplaces: " + error, {
      status: 500,
    });
  }
}
