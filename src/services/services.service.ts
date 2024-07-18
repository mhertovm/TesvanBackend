import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        services: {
          type: {
            needs: { type_am: true, type_en: true, type_ru: true },
            compute(services) {
              return services[`type_${language}`];
            },
          },
          service: {
            needs: { service_am: true, service_en: true, service_ru: true },
            compute(services) {
              return services[`service_${language}`];
            },
          },
          metaTitle: {
            needs: {
              metaTitle_am: true,
              metaTitle_en: true,
              metaTitle_ru: true,
            },
            compute(services) {
              return services[`metaTitle_${language}`];
            },
          },
          metaDescription: {
            needs: {
              metaDescription_am: true,
              metaDescription_en: true,
              metaDescription_ru: true,
            },
            compute(services) {
              return services[`metaDescription_${language}`];
            },
          },
        },
        approach: {
          approach: {
            needs: { approach_am: true, approach_en: true, approach_ru: true },
            compute(approach) {
              return approach[`approach_${language}`];
            },
          },
        },
        benefits: {
          title: {
            needs: { title_am: true, title_en: true, title_ru: true },
            compute(benefit) {
              return benefit[`title_${language}`];
            },
          },
          description: {
            needs: {
              description_am: true,
              description_en: true,
              description_ru: true,
            },
            compute(benefit) {
              return benefit[`description_${language}`];
            },
          },
        },
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
        offers: {
          offers: {
            needs: { offers_am: true, offers_en: true, offers_ru: true },
            compute(offers) {
              return offers[`offers_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createServiceDto: CreateServiceDto) {
    try {
      const newServices = await this.myPrisma().services.create({
        data: createServiceDto,
      });
      return newServices;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(language: string) {
    try {
      const services = await this.myPrisma(language).services.findMany({
        select: {
          id: true,
          type: true,
          service: true,
          metaTitle: true,
          metaDescription: true,
          image: true,
          url: true,
          altText: true,
          approach: {
            select: {
              id: true,
              serviceId: true,
              approach: true,
            },
          },
          benefits: {
            select: {
              id: true,
              serviceId: true,
              title: true,
              description: true,
            },
          },
          faq: {
            select: {
              id: true,
              serviceId: true,
              question: true,
              answer: true,
            },
          },
          offers: {
            select: {
              id: true,
              serviceId: true,
              offers: true,
            },
          },
        },
      });
      return services;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number, language: string) {
    try {
      const servic = await this.myPrisma(language).services.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          type: true,
          service: true,
          metaTitle: true,
          metaDescription: true,
          image: true,
          url: true,
          altText: true,
          approach: {
            select: {
              id: true,
              serviceId: true,
              approach: true,
            },
          },
          benefits: {
            select: {
              id: true,
              serviceId: true,
              title: true,
              description: true,
            },
          },
          faq: {
            select: {
              id: true,
              serviceId: true,
              question: true,
              answer: true,
            },
          },
          offers: {
            select: {
              id: true,
              serviceId: true,
              offers: true,
            },
          },
        },
      });
      return servic;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    try {
      const updateServices = await this.myPrisma().services.update({
        where: {
          id,
        },
        data: updateServiceDto,
      });
      return updateServices;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
      const deleteServices = await this.myPrisma().services.delete({
        where: {
          id,
        },
      });
      return deleteServices;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
