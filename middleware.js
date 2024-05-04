import { NextResponse } from "next/server";
import {
  updateSession,
  // decrypt,
} from "./lib/sectionRelated/getUpdateDeleteSection";
import { cookies } from "next/headers";

export async function middleware(request, response) {
  // console.log("MIDDLEWARE URL", request.url);
  const cookieStore = cookies();
  const cookieValue = cookieStore.get("cookie")?.value;

  if (!cookieValue) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  // DECRYPT TOKEN
  // const decoded = await decrypt(cookieValue);

  await updateSession();
}

export const config = {
  matcher: [
    "/user-update/:path*",
    "/user/:path*",
    "/delete-acc/:path*",
    "/pw-update/:path*",
    "/api/pw-update/:path*",
    "/api/user-update/:path*",
    "/api/delete-acc/:path*",
  ],
};
