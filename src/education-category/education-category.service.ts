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
          educationId: true,
          category: true
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
          educationId: true,
          category: true
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
