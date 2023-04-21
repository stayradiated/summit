import type {
  Hill,
  Athlete,
  Prisma,
  Activity,
  Session,
  Ascent,
} from '@prisma/client'
import { errorBoundary } from '@stayradiated/error-boundary'
import { prisma } from './db.server'

type CreateSessionOptions = Prisma.SessionUncheckedCreateInput

const createSession = (options: CreateSessionOptions): Promise<Session|Error> => {
  return errorBoundary(async () => {
    const session = await prisma.session.create({
      data: options,
    })
    return session
  })
}

type UpsertAthleteOptions = Omit<
  Prisma.AthleteUncheckedCreateInput,
  'id' | 'sessions' | 'activities' | 'following' | 'followedBy'
>

const upsertAthlete = (options: UpsertAthleteOptions): Promise<Athlete | Error> => {
  return errorBoundary(async () => {
    const athlete = await prisma.athlete.upsert({
      create: options,
      update: options,
      where: {
        remoteId: options.remoteId,
      },
    })
    return athlete
  })
}

type UpsertActivityOptions = Omit<Prisma.ActivityUncheckedCreateInput, 'id'>

const upsertActivity = async (options: UpsertActivityOptions) => {
  const activity = await prisma.activity.upsert({
    create: options,
    update: options,
    where: {
      remoteId: options.remoteId,
    },
  })
  return activity
}

type UpsertAscentOptions = Prisma.AscentUncheckedCreateInput

const upsertAscent = async (options: UpsertAscentOptions) => {
  const ascent = await prisma.ascent.upsert({
    create: options,
    update: options,
    where: {
      hillId_activityId: {
        activityId: options.activityId,
        hillId: options.hillId,
      },
    },
  })
  return ascent
}

type GetSessionOptions = {
  id: number
}

const getSession = async (
  options: GetSessionOptions,
): Promise<Session | Error> => {
  const { id } = options
  return errorBoundary(async () => {
    const session = await prisma.session.findUniqueOrThrow({
      where: {
        id,
      },
    })
    return session
  })
}

type GetAthleteOptions = {
  id: number
}

const getAthlete = async (
  options: GetAthleteOptions,
): Promise<Athlete | Error> => {
  const { id } = options
  return errorBoundary(async () => {
    const athlete = await prisma.athlete.findUniqueOrThrow({
      where: {
        id,
      },
    })
    return athlete
  })
}

type GetHillOptions = {
  classification: string
}

const getHills = async (options: GetHillOptions): Promise<Hill[] | Error> => {
  const { classification } = options
  return errorBoundary(async () => {
    const hills = await prisma.hill.findMany({
      where: {
        classification: {
          contains: `|${classification}|`,
        },
      },
    })
    return hills
  })
}

type GetActivityWithAscentListOptions = {
  id: number
}

type ActivityWithAscentList = Activity & {
  ascents: Ascent[]
}

const getActivityWithAscentList = async (
  options: GetActivityWithAscentListOptions,
): Promise<ActivityWithAscentList | Error> => {
  const { id } = options
  return errorBoundary(async () => {
    const activity = await prisma.activity.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        ascents: true,
      },
    })
    return activity
  })
}

enum HillClassification {
  Wainwright = 'Wainwright',
  Birkett = 'Birkett',
  Hewitt = 'Hewitt',
  Nuttall = 'Nuttall',
  Fellranger = 'Fellranger',
  Synge = 'Synge',
  Sim = 'Sim',
  Tump = 'Tump',
}

export {
  createSession,
  upsertAthlete,
  upsertActivity,
  upsertAscent,
  getAthlete,
  getHills,
  getActivityWithAscentList,
  getSession,
  HillClassification,
}

export type { ActivityWithAscentList }
