import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FaqService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        faq: {
          question: {
            needs: { question_am: true, question_en: true, question_ru: true },
            compute(faq) {
              return faq[`question_${language}`];
            },
          },
          answer: {
            needs: { answer_am: true, answer_en: true, answer_ru: true },
            compute(faq) {
              return faq[`answer_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createFaqDto: CreateFaqDto) {
    const newFaq = await this.myPrisma().faq.create({
      data: createFaqDto,
    });
    return newFaq;
  }

  async findAll(language: string) {
    const faq = await this.myPrisma(language).faq.findMany({
      select: {
        id: true,
        serviceId: true,
        question: true,
        answer: true,
      },
    });
    return faq;
  }

  async findOne(id: number, language: string) {
    const faq = await this.myPrisma(language).faq.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        serviceId: true,
        question: true,
        answer: true,
      },
    });
    return faq;
  }

  async update(id: number, updateFaqDto: UpdateFaqDto) {
    const updateFaq = await this.myPrisma().faq.update({
      where: {
        id,
      },
      data: updateFaqDto,
    });
    return updateFaq;
  }

  async remove(id: number) {
    const deleteFaq = await this.myPrisma().faq.delete({
      where: {
        id,
      },
    });
    return deleteFaq;
  }
}
