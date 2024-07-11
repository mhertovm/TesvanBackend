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
  });
  const privacyPolicy = await prisma.privacyPolicy.create({
    data: {
      metaTitle_am: 'metaTitle_am',
      metaTitle_en: 'metaTitle_en',
      metaTitle_ru: 'metaTitle_ru',
      metaDescription_am: 'metaDescription_am',
      metaDescription_en: 'metaDescription_en',
      metaDescription_ru: 'metaDescription_ru',
      content_am: 'content_am',
      content_en: 'content_en',
      content_ru: 'content_ru',
    }
  });
  const aboutUs = await prisma.aboutUs.create({
    data: {
      metaTitle_am: 'metaTitle_am',  
      metaTitle_en: 'metaTitle_en',  
      metaTitle_ru: 'metaTitle_ru', 
      metaDescription_am: 'metaDescription_am', 
      metaDescription_en: 'metaDescription_en', 
      metaDescription_ru: 'metaDescription_ru', 
      projects: 0, 
      freeCourse: 0, 
      employess: 0, 
      content_am: 'content_am', 
      content_en: 'content_en',  
      content_ru: 'content_ru',
    }
  });
  console.log("db seed success");
  
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })