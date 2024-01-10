// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

let instCount = 0
const sessionKey = "session-id";
export async function middleware(request: NextRequest) {
  // this could be a bug later on :(
  if (request.headers.get("purpose") === 'prefetch') return NextResponse.next();

  if (request.cookies.has(sessionKey)) {
    console.log(
      `USER RETURN: ${request.cookies.get(sessionKey)?.value} -- ${request.url}`
    );
  } else {
    instCount++
    const sessionValue = uuidv4();
    console.log(`USER VISIT: #${instCount} -- ${sessionValue}`);
    const response = NextResponse.next();
    response.cookies.set({
      name: sessionKey,
      value: sessionValue,
      path: "/",
      httpOnly: true,
    });
    return response;
  }
}

export const config = {
  matcher: "/((?!api|_next|.*.ico|.*.jpeg|.*.jpg|.*.png|.*.css|.*.js).*)"
};
