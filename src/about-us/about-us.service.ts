import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateAboutUsDto } from './dto/create-about-us.dto';
import { UpdateAboutUsDto } from './dto/update-about-us.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {

  if (!language) {
    language = "en"
  }

  const prisma = new PrismaClient()
    .$extends({
      result: {
        aboutUs: {
          metaTitle: {
            needs: { metaTitle_am: true, metaTitle_en: true, metaTitle_ru: true },
            compute(aboutUs) {
              return aboutUs[`metaTitle_${language}`]
            }
          },
          metaDescription: {
            needs: { metaDescription_am: true, metaDescription_en: true, metaDescription_ru: true },
            compute(aboutUs) {
              return aboutUs[`metaDescription_${language}`]
            }
          },
          content: {
            needs: { content_am: true, content_en: true, content_ru: true },
            compute(aboutUs) {
              return aboutUs[`content_${language}`]
            }
          },
        }
      }
    })

  return prisma
}

@Injectable()
export class AboutUsService {
  async create(createAboutUsDto: CreateAboutUsDto) {
    try {
      const newAboutUs = await myPrisma().aboutUs.create({
        data: createAboutUsDto
      });
      return newAboutUs;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(language: string) {
    try {
      const aboutUs = await myPrisma(language).aboutUs.findFirst({
        select: {
          id: true,
          projects: true,
          freeCourse: true,
          employess: true,
          metaTitle: true,
          metaDescription: true,
          content: true,
        }
      })

      return aboutUs;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateAboutUsDto: UpdateAboutUsDto) {
    try {
      const updateAboutUs = await myPrisma().aboutUs.update({
        where: {
          id,
        },
        data: updateAboutUsDto
      })
      return updateAboutUs;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteAboutUs = await myPrisma().aboutUs.delete({
        where: {
          id,
        },
      })
      return deleteAboutUs;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
