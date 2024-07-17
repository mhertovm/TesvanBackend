import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
    try {
      const newCareers = this.myPrisma().careers.create({
        data: createCareerDto,
      });
      return newCareers;
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
      const careers = this.myPrisma(language).careers.findMany({
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
      const career = this.myPrisma(language).careers.findUnique({
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
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateCareerDto: UpdateCareerDto) {
    try {
      const updateCareers = this.myPrisma().careers.update({
        where: {
          id,
        },
        data: updateCareerDto,
      });
      return updateCareers;
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
      const deleteCareers = this.myPrisma().careers.delete({
        where: {
          id,
        },
      });
      return deleteCareers;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
