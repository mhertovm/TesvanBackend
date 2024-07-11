const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function registerUser() {
//////////////////////////////
    const name = "gg"
    const surname = "gg"
    const email = "gg"
    const username = "gg"
    const password = "gg"
////////////////////////////// npm run register


    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    const user = await prisma.user.create({
        data: {
            name,
            surname,
            email,
            username,
            password: hash
        },
    });
    console.log(`User ${name} registered`)
}

registerUser()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })