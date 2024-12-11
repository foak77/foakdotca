import { NextResponse } from "next/server";
import { logout } from "../../../lib/sectionRelated/getUpdateDeleteSection";

// SIGN OUT
export async function GET() {
  logout();
  return NextResponse.json({
    message: "👋 USER LOGGED OUT",
    status: 201,
    error: false,
  });
}
