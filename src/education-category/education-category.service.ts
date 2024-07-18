import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateEducationCategoryDto } from './dto/create-education-category.dto';
import { UpdateEducationCategoryDto } from './dto/update-education-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EducationCategoryService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        educationCategory: {
          category: {
            needs: { category_am: true, category_en: true, category_ru: true },
            compute(educationCategory) {
              return educationCategory[`category_${language}`];
            },
          },
        },
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
  async create(createEducationCategoryDto: CreateEducationCategoryDto) {
    try {
      const newEducationCategory = this.myPrisma().educationCategory.create({
        data: createEducationCategoryDto,
      });
      return newEducationCategory;
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
      const educationCategory = await this.myPrisma(
        language,
      ).educationCategory.findMany({
        select: {
          id: true,
          category: true,
          educations: {
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
          },
        },
      });
      return educationCategory;
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
      const educationCategory = await this.myPrisma(
        language,
      ).educationCategory.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          category: true,
          educations: {
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
          },
        },
      });
      return educationCategory;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    id: number,
    updateEducationCategoryDto: UpdateEducationCategoryDto,
  ) {
    try {
      const updateEducationCategory = await this.myPrisma().educationCategory.update({
        where: {
          id,
        },
        data: updateEducationCategoryDto,
      });
      return updateEducationCategory;
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
      const deleteEducationCategory = await this.myPrisma().educationCategory.delete({
        where: {
          id,
        },
      });
      return deleteEducationCategory;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
