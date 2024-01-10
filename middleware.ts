// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

const sessionKey = "session-id";
export async function middleware(request: NextRequest) {
  // this could be a bug later on :(
  if (request.headers.get("purpose") === 'prefetch') return NextResponse.next();
  
  const date = new Date();
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}:{${date.getHours()}:${date.getMinutes()}}`;

  if (request.cookies.has(sessionKey)) {
    console.log(
      `USER RETURN: ${formattedDate} -- ${request.cookies.get(sessionKey)?.value} -- ${request.url}`
    );
  } else {
    const sessionValue = uuidv4();
    console.log(`USER VISIT: ${formattedDate} -- ${sessionValue}`);
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
