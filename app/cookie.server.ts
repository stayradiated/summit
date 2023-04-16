import { createCookieSessionStorage, Session } from "@remix-run/node"

type SessionData = {
  athlete: {
    username: string,
    firstName: string,
    lastName: string,
  }
  accessToken: string
  expiresAt: number
}

const sessionStore = createCookieSessionStorage<SessionData>({
  cookie: {
    name: '__session',
    maxAge: 604_800, // 1 week
    httpOnly: true,
    secure: true,
    secrets: ["this_should_be_an_environment_variable"],
    sameSite: "lax",
  },
})


const getSession = async (request: Request): Promise<Session<SessionData>> => {
  const cookieHeader = request.headers.get("Cookie");
  const session = await sessionStore.getSession(cookieHeader)
  return session
}

const setSessionHeaders = async (session: Session<SessionData>) => {
  return {
    'Set-Cookie': await sessionStore.commitSession(session)
  }
}

const destroySessionHeaders = async (session: Session<SessionData>) => {
  return {
    'Set-Cookie': await sessionStore.destroySession(session)
  }
}

export { getSession, setSessionHeaders, destroySessionHeaders }
export type { Session }
