import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateEducationCategoryDto } from './dto/create-education-category.dto';
import { UpdateEducationCategoryDto } from './dto/update-education-category.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en"
  const prisma = new PrismaClient()
    .$extends({
      result: {
        educationCategory: {
          category: {
            needs: { category_am: true, category_en: true, category_ru: true },
            compute(educationCategory) {
              return educationCategory[`category_${language}`]
            }
          }
        },
        educations: {
          type: {
            needs: { type_am: true, type_en: true, type_ru: true },
            compute(educations) {
              return educations[`type_${language}`]
            }
          },
          education: {
            needs: { education_am: true, education_en: true, education_ru: true },
            compute(educations) {
              return educations[`education_${language}`]
            }
          },
          metaTitle: {
            needs: { metaTitle_am: true, metaTitle_en: true, metaTitle_ru: true },
            compute(educations) {
              return educations[`metaTitle_${language}`]
            }
          },
          metaDescription: {
            needs: { metaDescription_am: true, metaDescription_en: true, metaDescription_ru: true },
            compute(educations) {
              return educations[`metaDescription_${language}`]
            }
          },
          content: {
            needs: { content_am: true, content_en: true, content_ru: true },
            compute(educations) {
              return educations[`content_${language}`]
            }
          },
        }
      }
    })
  return prisma
}

@Injectable()
export class EducationCategoryService {
  async create(createEducationCategoryDto: CreateEducationCategoryDto) {
    try {
      const newEducationCategory = await myPrisma().educationCategory.create({
        data: createEducationCategoryDto,
      });
      return newEducationCategory;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const educationCategory = await myPrisma(language).educationCategory.findMany({
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
              content: true
            }
          }
        }
      })
      return educationCategory;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const educationCategory = await myPrisma(language).educationCategory.findUnique({
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
              content: true
            }
          }
        }
      })
      return educationCategory;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateEducationCategoryDto: UpdateEducationCategoryDto) {
    try {
      const updateEducationCategory = await myPrisma().educationCategory.update({
        where: {
          id,
        },
        data: updateEducationCategoryDto
      })
      return updateEducationCategory;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteEducationCategory = await myPrisma().educationCategory.delete({
        where: {
          id,
        },
      })
      return deleteEducationCategory;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
