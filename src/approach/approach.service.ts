import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateApproachDto } from './dto/create-approach.dto';
import { UpdateApproachDto } from './dto/update-approach.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        approach: {
          approach: {
            needs: { approach_am: true, approach_en: true, approach_ru: true },
            compute(approach) {
              return approach[`approach_${language}`]
            }
          },
        }
      }
    })
  return prisma

}

@Injectable()
export class ApproachService {
  async create(createApproachDto: CreateApproachDto) {
    try {
      const newApproach = await myPrisma().approach.create({
        data: createApproachDto,
      });
      return newApproach;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const approaches = await myPrisma(language).approach.findMany({
        select: {
          id: true,
          serviceId: true,
          approach: true
        }
      })
      return approaches;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const approach = await myPrisma(language).approach.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          serviceId: true,
          approach: true
        },
      })
      return approach;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateApproachDto: UpdateApproachDto) {
    try {
      const updateApproach = await myPrisma().approach.update({
        where: {
          id,
        },
        data: updateApproachDto
      })
      return updateApproach;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteApproach = await myPrisma().approach.delete({
        where: {
          id,
        },
      })
      return deleteApproach;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
