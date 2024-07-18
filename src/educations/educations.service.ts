import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EducationsService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        educations: {
          type: {
            needs: { type_am: true, type_en: true, type_ru: true },
            compute(educations) {
              return educations[`type_${language}`];
            },
          },
          education: {
            needs: {
              education_am: true,
              education_en: true,
              education_ru: true,
            },
            compute(educations) {
              return educations[`education_${language}`];
            },
          },
          metaTitle: {
            needs: {
              metaTitle_am: true,
              metaTitle_en: true,
              metaTitle_ru: true,
            },
            compute(educations) {
              return educations[`metaTitle_${language}`];
            },
          },
          metaDescription: {
            needs: {
              metaDescription_am: true,
              metaDescription_en: true,
              metaDescription_ru: true,
            },
            compute(educations) {
              return educations[`metaDescription_${language}`];
            },
          },
          content: {
            needs: { content_am: true, content_en: true, content_ru: true },
            compute(educations) {
              return educations[`content_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createEducationDto: CreateEducationDto) {
    try {
      const newEducations = await this.myPrisma().educations.create({
        data: createEducationDto,
      });
      return newEducations;
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
      const educations = await this.myPrisma(language).educations.findMany({
        select: {
          id: true,
          type: true,
          education: true,
          metaTitle: true,
          metaDescription: true,
          image: true,
          url: true,
          content: true,
        },
      });
      return educations;
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
      const education = await this.myPrisma(language).educations.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          type: true,
          education: true,
          metaTitle: true,
          metaDescription: true,
          image: true,
          url: true,
          content: true,
        },
      });
      return education;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateEducationDto: UpdateEducationDto) {
    try {
      const updateEducations = await this.myPrisma().educations.update({
        where: {
          id,
        },
        data: updateEducationDto,
      });
      return updateEducations;
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
      const deleteEducations = await this.myPrisma().educations.delete({
        where: {
          id,
        },
      });
      return deleteEducations;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
