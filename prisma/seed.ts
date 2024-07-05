const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'admin',
      surname: 'admin',
      email: 'admin@gmail.com',
      username: 'admin',
      password: '$2b$10$Gldd2TFEZCS6uKvAT8FcM.d9heiwxovBuTyJhK7EEmdCcMP0nTx02'
    },
  })
  console.log(`Created user with id: ${user.id}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })