import { PrismaClient } from '@prisma/client'
import { getOnce } from './global.server'

const prisma = getOnce<PrismaClient>('prisma', () => new PrismaClient())
export { prisma }
