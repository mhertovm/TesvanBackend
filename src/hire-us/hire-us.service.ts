import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateHireUsDto } from './dto/create-hire-us.dto';
import { UpdateHireUsDto } from './dto/update-hire-us.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        hireUs: {
          hire: {
            needs: { hire_am: true, hire_en: true, hire_ru: true },
            compute(hireUs) {
              return hireUs[`hire_${language}`]
            }
          }
        }
      }
    })
  return prisma
}

@Injectable()
export class HireUsService {
  async create(createHireUsDto: CreateHireUsDto) {
    try {
      const newHireUs = await myPrisma().hireUs.create({
        data: createHireUsDto,
      });
      return newHireUs;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const hireUs = await myPrisma(language).hireUs.findMany({
        select: {
          id: true,
          hire: true
        }
      })
      return hireUs;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const hireUs = await myPrisma(language).hireUs.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          hire: true
        }
      })
      return hireUs;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateHireUsDto: UpdateHireUsDto) {
    try {
      const updateHireUs = await myPrisma().hireUs.update({
        where: {
          id,
        },
        data: updateHireUsDto
      })
      return updateHireUs;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteHireUs = await myPrisma().hireUs.delete({
        where: {
          id,
        },
      })
      return deleteHireUs;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
