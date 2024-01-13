import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

let instCount = 0
const sessionKey = "session-id";
export const handleSession = async (path: string) => {
  'use server'

  const cookieStore = cookies()
  if (cookieStore.has(sessionKey)) {
    console.log(
      `USER RETURN: ${cookieStore.get(sessionKey)?.value} -- ${path}`
    );
  } else {
    instCount++
    const sessionValue = uuidv4();
    console.log(`USER VISIT: -- ${sessionValue} -- count: ${instCount} -- ${path}`);
    cookieStore.set({
      name: sessionKey,
      value: sessionValue,
      path: "/",
      httpOnly: true,
    });
  }
}