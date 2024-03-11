import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoDb/dbConnect";
import Onportfolios from "../../../models/onportfolioModel";

export async function GET() {
  try {
    await dbConnect();
    const onportfolios = await Onportfolios.find();
    return NextResponse.json({ onportfolios });
  } catch (error) {
    return new NextResponse("💥💥💥 ERROR in Fetchin workplaces" + error, {
      status: 500,
    });
  }
}

// export async function GET() {
//   await dbConnect();
//   const onportfolios = await Onportfolios.find();
//   return NextResponse.json({ onportfolios });
// }
