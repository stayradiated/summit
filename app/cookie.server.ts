import type { Session } from '@prisma/client'
import {
  createCookieSessionStorage,
  type Session as RSession,
} from '@remix-run/node'
import * as core from '~/core'

// Just store the minimal amount of data
type CookieSessionData = {
  id: number
}
type RawSessionCookie = RSession<CookieSessionData, CookieSessionData>

const sessionStore = createCookieSessionStorage<CookieSessionData>({
  cookie: {
    name: '__session',
    maxAge: 604_800, // 1 week
    httpOnly: true,
    secure: true,
    secrets: ['this_should_be_an_environment_variable'],
    sameSite: 'lax',
  },
})

type CommitHeadersFn = () => Promise<Record<string, string>>
type DestroyHeadersFn = () => Promise<Record<string, string>>

type SessionCookie = Session & {
  isValid: true
  commitHeaders: CommitHeadersFn
  destroyHeaders: DestroyHeadersFn
}

type InvalidSessionCookie = {
  isValid: false
  error: Error
  destroyHeaders: DestroyHeadersFn
}

const buildSessionCookie = (
  session: Session,
  rawSessionCookie: RawSessionCookie,
): SessionCookie => {
  return {
    isValid: true,
    ...session,
    commitHeaders: async () => ({
      'Set-Cookie': await sessionStore.commitSession(rawSessionCookie),
    }),
    destroyHeaders: async () => ({
      'Set-Cookie': await sessionStore.destroySession(rawSessionCookie),
    }),
  }
}

const buildInvalidSessionCookie = (
  error: Error,
  rawSessionCookie: RawSessionCookie,
): InvalidSessionCookie => {
  return {
    isValid: false,
    error,
    destroyHeaders: async () => ({
      'Set-Cookie': await sessionStore.destroySession(rawSessionCookie),
    }),
  }
}

const getSession = async (
  request: Request,
): Promise<SessionCookie | InvalidSessionCookie> => {
  const cookieHeader = request.headers.get('Cookie')
  const rawSessionCookie = await sessionStore.getSession(cookieHeader)

  const sessionId = rawSessionCookie.get('id')
  if (typeof sessionId !== 'number') {
    return buildInvalidSessionCookie(
      new Error('Could not get session ID from cookie.'),
      rawSessionCookie,
    )
  }

  const session = await core.getSession({ id: sessionId })
  if (session instanceof Error) {
    return buildInvalidSessionCookie(session, rawSessionCookie)
  }

  return buildSessionCookie(session, rawSessionCookie)
}

const wrapSession = async (
  request: Request,
  session: Session,
): Promise<SessionCookie> => {
  const cookieHeader = request.headers.get('Cookie')
  const sessionCookie = await sessionStore.getSession(cookieHeader)
  sessionCookie.set('id', session.id)
  return buildSessionCookie(session, sessionCookie)
}

export { getSession, wrapSession }
