import { PrismaClient } from '@prisma/client'
import { createGlobalVariable } from './global.server'

const prisma = createGlobalVariable('prisma', () => new PrismaClient())
export { prisma }
