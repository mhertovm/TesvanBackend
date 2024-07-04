import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCoreValueDto } from './dto/create-core-value.dto';
import { UpdateCoreValueDto } from './dto/update-core-value.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en"
  const prisma = new PrismaClient()
    .$extends({
      result: {
        coreValues: {
          title: {
            needs: { title_am: true, title_en: true, title_ru: true },
            compute(coreValues) {
              return coreValues[`title_${language}`]
            }
          },
          description: {
            needs: { description_am: true, description_en: true, description_ru: true },
            compute(coreValues) {
              return coreValues[`description_${language}`]
            }
          },
        }
      }
    })
  return prisma
}

@Injectable()
export class CoreValuesService {
  async create(createCoreValueDto: CreateCoreValueDto) {
    try {
      const newCoreValues = await myPrisma().coreValues.create({
        data: createCoreValueDto,
      });
      return newCoreValues;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const coreValues = await myPrisma(language).coreValues.findMany({
        select: {
          id: true,
          title: true,
          description: true
        }
      })
      return coreValues;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const coreValue = await myPrisma(language).coreValues.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          title: true,
          description: true
        }
      })
      return coreValue;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateCoreValueDto: UpdateCoreValueDto) {
    try {
      const updateCoreValues = await myPrisma().coreValues.update({
        where: {
          id,
        },
        data: updateCoreValueDto
      })
      return updateCoreValues;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteCoreValues = await myPrisma().coreValues.delete({
        where: {
          id,
        },
      })
      return deleteCoreValues;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
