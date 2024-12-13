import { cookies } from "next/headers";
import { SignJWT, jwtVerify, JWTPayload } from "jose"; // Corrected import
import { NextResponse } from "next/server";

// ENCRYPTION FOR THE SESSION
const secretKey = process.env.JOSE_SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

// Define the type for the payload object
interface Payload {
  [key: string]: any; // Adjust according to the actual structure of your payload
  expires: number;
}

// ENCRYPT
export async function encrypt(payload: Payload): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(payload.expires)
    .sign(key);
}

// DE-CRYPT
export async function decrypt(input: string): Promise<JWTPayload> {
  // Use JWTPayload here
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

// GET SESSION
export async function getSession(): Promise<JWTPayload | null> {
  const cookieValue = cookies().get("cookie")?.value;
  if (!cookieValue) return null;
  return await decrypt(cookieValue);
}

// UPDATE SESSION
export async function updateSession(request: Request): Promise<NextResponse> {
  const cookieValue = cookies().get("cookie")?.value;

  if (!cookieValue) return NextResponse.next();

  // REFRESH THE SESSION SO IT DOESN'T EXPIRE
  const decoded = await decrypt(cookieValue);

  // Ensure 'expires' is a valid number (milliseconds timestamp)
  const newExpires = Date.now() + 60 * 60 * 1000; // 1 hour from now
  decoded.expires = newExpires;

  const res = NextResponse.next();

  // Ensure the 'expires' property is a valid number
  res.cookies.set({
    name: "cookie",
    value: await encrypt(decoded as Payload),
    httpOnly: true,
    expires: newExpires, // Ensure this is a valid number
  });

  return res;
}

// LOG OUT - DELETE SESSION
export async function logout(): Promise<void> {
  cookies().set("cookie", "", { expires: new Date(0) });
}

// import { cookies } from "next/headers";
// import { SignJWT, jwtVerify } from "jose";
// import { NextResponse } from "next/server";

// //ENCRYPTION FOR THE SESSION
// const secretKey = process.env.JOSE_SECRET_KEY;
// const key = new TextEncoder().encode(secretKey);

// //ENCRYPT
// export async function encrypt(payload) {
//   return await new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime(payload.expires)
//     .sign(key);
// }

// //DE-CRYPT
// export async function decrypt(input) {
//   const { payload } = await jwtVerify(input, key, {
//     algorithms: ["HS256"],
//   });
//   return payload;
// }

// //GET SESSION
// export async function getSection() {
//   const cookieValue = cookies().get("cookie")?.value;
//   if (!cookieValue) return null;
//   return await decrypt(cookieValue);
// }

// //UPDATE SESSION
// export async function updateSession(request) {
//   const cookieValue = cookies().get("cookie")?.value;

//   if (!cookieValue) return null;

//   // REFRESH THE SECTION SO IT DOESN'T EXPIRE
//   const decoded = await decrypt(cookieValue);

//   decoded.expires = Date.now() + 60 * 60 * 1000; //1H;
//   const res = NextResponse.next();
//   res.cookies.set({
//     name: "cookie",
//     value: await encrypt(decoded),
//     httpOnly: true,
//     expires: decoded.expires,
//     // sameSite: "none",
//     // secure: true,
//   });
//   return res;
// }

// // LOG OUT - DELETE SESSION
// export async function logout() {
//   cookies().set("cookie", "", { expires: new Date(0) });
// }
