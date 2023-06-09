const { PrismaClient } = require('@prisma/client')
const { seedHill } = require('./seed.hill')

void (async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    await seedHill(prisma)
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
})()
