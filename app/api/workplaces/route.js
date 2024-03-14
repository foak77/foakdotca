import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoDb/dbConnect";
import Workplaces from "./../../../models/workplaceModel";

export async function GET() {
  try {
    await dbConnect();
    const workplaces = await Workplaces.find();
    return NextResponse.json({ workplaces }, { status: 200 });
  } catch (error) {
    return new NextResponse("💥💥💥 ERROR in Fetchin workplaces" + error, {
      status: 500,
    });
  }
}

// export async function GET() {
//   await dbConnect();
//   const workplaces = await Workplaces.find();
//   return NextResponse.json({ workplaces });
// }
