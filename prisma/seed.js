import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    //admin user
    where: { id: 0 },
    update: {},
    create: {
      id: 0,
      createdByUserId: 0,
      updatedByUserId: 0,
      username: "systemuser",
      password: ""
    }
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })