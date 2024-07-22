import { Injectable } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CareersService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        careers: {
          metaTitle: {
            needs: {
              metaTitle_am: true,
              metaTitle_en: true,
              metaTitle_ru: true,
            },
            compute(careers) {
              return careers[`metaTitle_${language}`];
            },
          },
          metaDescription: {
            needs: {
              metaDescription_am: true,
              metaDescription_en: true,
              metaDescription_ru: true,
            },
            compute(careers) {
              return careers[`metaDescription_${language}`];
            },
          },
          location: {
            needs: { location_am: true, location_en: true, location_ru: true },
            compute(careers) {
              return careers[`location_${language}`];
            },
          },
          jobDescription: {
            needs: {
              jobDescription_am: true,
              jobDescription_en: true,
              jobDescription_ru: true,
            },
            compute(careers) {
              return careers[`jobDescription_${language}`];
            },
          },
        },
      },
    });
  }

  async create(createCareerDto: CreateCareerDto) {
    const newCareers = await this.myPrisma().careers.create({
      data: createCareerDto,
    });
    return newCareers;
  }

  async findAll(language: string) {
    const careers = await this.myPrisma(language).careers.findMany({
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
      },
    });
    return careers;
  }

  async findOne(id: number, language: string) {
    const career = await this.myPrisma(language).careers.findUnique({
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
      },
    });
    return career;
  }

  async update(id: number, updateCareerDto: UpdateCareerDto) {
    const updateCareers = await this.myPrisma().careers.update({
      where: {
        id,
      },
      data: updateCareerDto,
    });
    return updateCareers;
  }

  async remove(id: number) {
    const deleteCareers = await this.myPrisma().careers.delete({
      where: {
        id,
      },
    });
    return deleteCareers;
  }
}
