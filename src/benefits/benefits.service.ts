import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { UpdateBenefitDto } from './dto/update-benefit.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en"
  const prisma = new PrismaClient()
    .$extends({
      result: {
        benefits: {
          title: {
            needs: { title_am: true, title_en: true, title_ru: true },
            compute(benefit) {
              return benefit[`title_${language}`]
            }
          },
          description: {
            needs: { description_am: true, description_en: true, description_ru: true },
            compute(benefit) {
              return benefit[`description_${language}`]
            }
          },
        }
      }
    })
  return prisma
}

@Injectable()
export class BenefitsService {
  async create(createBenefitDto: CreateBenefitDto) {
    try {
      const newBenefit = await myPrisma().benefits.create({
        data: createBenefitDto,
      });
      return newBenefit;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const benefits = await myPrisma(language).benefits.findMany({
        select: {
          id: true,
          serviceId: true,
          title: true,
          description: true
        }
      })
      return benefits;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const benefit = await myPrisma(language).benefits.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          serviceId: true,
          title: true,
          description: true
        }
      })
      return benefit;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateBenefitDto: UpdateBenefitDto) {
    try {
      const updateBenefit = await myPrisma().benefits.update({
        where: {
          id,
        },
        data: updateBenefitDto
      })
      return updateBenefit;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteBenefit = await myPrisma().benefits.delete({
        where: {
          id,
        },
      })
      return deleteBenefit;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
