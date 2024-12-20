import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

let userCount = 0;
const sessionKey = 'session-id';
export async function middleware(request) {
    const nextRes = NextResponse.next();
    const path = request.nextUrl.pathname;
    let sessionId = (await cookies()).get(sessionKey)?.value;
    if (!sessionId) {
        sessionId = uuidv4();
        nextRes.headers.set(
            'Set-Cookie',
            `${sessionKey}=${sessionId}; Path=/; HttpOnly`,
        );
        console.log(`user visits: ${++userCount}`);
    }

    console.log(`${sessionId} @ ${path}`);
    return nextRes;
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|icon.png).*)'],
};
