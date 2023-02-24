// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

const sessionKey = "session-id";
export function middleware(request: NextRequest) {
  if (request.cookies.has(sessionKey)) {
    console.log(
      `USER RETURN: ${request.cookies.get(sessionKey)?.value} -- ${request.url}`
    );
  } else {
    const sessionValue = uuidv4();
    console.log(`USER VISIT: ${sessionValue}`);
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
  matcher: "/((?!api|_next|favicon.ico).*)",
};
