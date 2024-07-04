import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateAboutWorkDto } from './dto/create-about-work.dto';
import { UpdateAboutWorkDto } from './dto/update-about-work.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        aboutWork: {
          work: {
            needs: { work_am: true, work_en: true, work_ru: true },
            compute(aboutWork) {
              return aboutWork[`work_${language}`]
            }
          },
        }
      }
    })
  return prisma
}


@Injectable()
export class AboutWorkService {
  async create(createAboutWorkDto: CreateAboutWorkDto) {
    try {
      const newAboutWork = await myPrisma().aboutWork.create({
        data: createAboutWorkDto,
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
      const aboutWorks = await myPrisma(language).aboutWork.findMany({
        select: {
          id: true,
          work: true,
        }
      })
      return aboutWorks;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const aboutWork = await myPrisma(language).aboutWork.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          work: true,
        }
      })
      return aboutWork;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateAboutWorkDto: UpdateAboutWorkDto) {
    try {
      const updateAboutWork = await myPrisma().aboutWork.update({
        where: {
          id,
        },
        data: updateAboutWorkDto
      })
      return updateAboutWork;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteAboutWork = await myPrisma().aboutWork.delete({
        where: {
          id,
        },
      })
      return deleteAboutWork;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
