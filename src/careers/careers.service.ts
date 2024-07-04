import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en"
  const prisma = new PrismaClient()
    .$extends({
      result: {
        careers: {
          metaTitle: {
            needs: { metaTitle_am: true, metaTitle_en: true, metaTitle_ru: true },
            compute(careers) {
              return careers[`metaTitle_${language}`]
            }
          },
          metaDescription: {
            needs: { metaDescription_am: true, metaDescription_en: true, metaDescription_ru: true },
            compute(careers) {
              return careers[`metaDescription_${language}`]
            }
          },
          location: {
            needs: { location_am: true, location_en: true, location_ru: true },
            compute(careers) {
              return careers[`location_${language}`]
            }
          },
          jobDescription: {
            needs: { jobDescription_am: true, jobDescription_en: true, jobDescription_ru: true },
            compute(careers) {
              return careers[`jobDescription_${language}`]
            }
          },
        }
      }
    })
  return prisma
}

@Injectable()
export class CareersService {
  async create(createCareerDto: CreateCareerDto) {
    try {
      const newCareers = await myPrisma().careers.create({
        data: createCareerDto,
      });
      return newCareers;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const careers = await myPrisma(language).careers.findMany({
        select: {
          id: true,
          metaTitle: true,
          metaDescription: true,
          url: true,
          term: true,
          type: true,
          location: true,
          dueDate: true,
          jobDescription: true,
        }
      })
      return careers;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const career = await myPrisma(language).careers.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          metaTitle: true,
          metaDescription: true,
          url: true,
          term: true,
          type: true,
          location: true,
          dueDate: true,
          jobDescription: true,
        }
      })
      return career;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateCareerDto: UpdateCareerDto) {
    try {
      const updateCareers = await myPrisma().careers.update({
        where: {
          id,
        },
        data: updateCareerDto
      })
      return updateCareers;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteCareers = await myPrisma().careers.delete({
        where: {
          id,
        },
      })
      return deleteCareers;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
