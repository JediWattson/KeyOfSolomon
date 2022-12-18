// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { v4 as uuidv4 } from 'uuid';

const sessionKey = 'session-id';
export function middleware(request: NextRequest) {
    if (request.cookies.has(sessionKey)) {
        console.log(`User Visited: ${request.cookies.get(sessionKey)?.value} -- ${request.url}`);
    } else {
        const response = NextResponse.next()
        response.cookies.set({
            name: sessionKey,
            value: uuidv4(),
            path: '/',
            httpOnly: true
        }) 
        return response;
    }
}

export const config = {
    matcher: '/((?!api|_next|favicon.ico).*)'
}
