import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePageTitleDto } from './dto/create-page-title.dto';
import { UpdatePageTitleDto } from './dto/update-page-title.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        pageTitles: {
          metaTitle: {
            needs: { metaTitle_am: true, metaTitle_en: true, metaTitle_ru: true },
            compute(pageTitles) {
              return pageTitles[`metaTitle_${language}`]
            }
          },
          metaDescription: {
            needs: { metaDescription_am: true, metaDescription_en: true, metaDescription_ru: true },
            compute(pageTitles) {
              return pageTitles[`metaDescription_${language}`]
            }
          }
        }
      }
    })
  return prisma
}

@Injectable()
export class PageTitlesService {
  async create(createPageTitleDto: CreatePageTitleDto) {
    try {
      const newAboutWork = await myPrisma().pageTitles.create({
        data: createPageTitleDto,
      });
      return newAboutWork;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const pageTitles = await myPrisma(language).pageTitles.findMany({
        select: {
          id: true,
          metaTitle: true,
          metaDescription: true,
          students: true,
          joinedOurTeam: true,
          image: true,
          type: true
        }
      })
      return pageTitles;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const pageTitl = await myPrisma(language).pageTitles.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          metaTitle: true,
          metaDescription: true,
          students: true,
          joinedOurTeam: true,
          image: true,
          type: true
        }
      })
      return pageTitl;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updatePageTitleDto: UpdatePageTitleDto) {
    try {
      const updatePageTitles = await myPrisma().pageTitles.update({
        where: {
          id,
        },
        data: updatePageTitleDto
      })
      return updatePageTitles;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deletePageTitles = await myPrisma().pageTitles.delete({
        where: {
          id,
        },
      })
      return deletePageTitles;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
