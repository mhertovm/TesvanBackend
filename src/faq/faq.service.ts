import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        faq: {
          question: {
            needs: { question_am: true, question_en: true, question_ru: true },
            compute(faq) {
              return faq[`question_${language}`]
            }
          },
          answer: {
            needs: { answer_am: true, answer_en: true, answer_ru: true },
            compute(faq) {
              return faq[`answer_${language}`]
            }
          },
        }
      }
    })
  return prisma
}

@Injectable()
export class FaqService {
  async create(createFaqDto: CreateFaqDto) {
    try {
      const newFaq = await myPrisma().faq.create({
        data: createFaqDto,
      });
      return newFaq;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const faq = await myPrisma(language).faq.findMany({
        select: {
          id: true,
          serviceId: true,
          question: true,
          answer: true
        }
      })
      return faq;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const faq = await myPrisma(language).faq.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          serviceId: true,
          question: true,
          answer: true
        }
      })
      return faq;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateFaqDto: UpdateFaqDto) {
    try {
      const updateFaq = await myPrisma().faq.update({
        where: {
          id,
        },
        data: updateFaqDto
      })
      return updateFaq;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteFaq = await myPrisma().faq.delete({
        where: {
          id,
        },
      })
      return deleteFaq;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
