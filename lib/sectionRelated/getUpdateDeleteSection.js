import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { NextResponse } from "next/server";

//ENCRYPTION FOR THE SESSION
const secretKey = process.env.JOSE_SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

//ENCRYPT
export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(payload.expires)
    .sign(key);
}

//DE-CRYPT
export async function decrypt(input) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

//GET SESSION
export async function getSection() {
  const cookieValue = cookies().get("cookie")?.value;
  if (!cookieValue) return null;
  return await decrypt(cookieValue);
}

//UPDATE SESSION
export async function updateSession(request) {
  const cookieValue = cookies().get("cookie")?.value;

  if (!cookieValue) return null;

  // REFRESH THE SECTION SO IT DOESN'T EXPIRE
  const decoded = await decrypt(cookieValue);

  decoded.expires = Date.now() + 60 * 60 * 1000; //1H;
  const res = NextResponse.next();
  res.cookies.set({
    name: "cookie",
    value: await encrypt(decoded),
    httpOnly: true,
    expires: decoded.expires,
    // sameSite: "none",
    // secure: true,
  });
  return res;
}

// LOG OUT - DELETE SESSION
export async function logout() {
  cookies().set("cookie", "", { expires: new Date(0) });
}
