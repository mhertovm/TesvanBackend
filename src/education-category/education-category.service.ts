import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateEducationCategoryDto } from './dto/create-education-category.dto';
import { UpdateEducationCategoryDto } from './dto/update-education-category.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class EducationCategoryService {
  async create(createEducationCategoryDto: CreateEducationCategoryDto) {
    try {
      const newEducationCategory = await prisma.educationCategory.create({
        data: createEducationCategoryDto,
      });
      return newEducationCategory;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const educationCategory = await prisma.educationCategory.findMany()
      return educationCategory;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const educationCategory = await prisma.educationCategory.findUnique({
        where: {
          id,
        },
      })
      return educationCategory;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updateEducationCategoryDto: UpdateEducationCategoryDto) {
    try {
      const updateEducationCategory = await prisma.educationCategory.update({
        where: {
          id,
        },
        data: updateEducationCategoryDto
      })
      return updateEducationCategory;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteEducationCategory = await prisma.educationCategory.delete({
        where: {
          id,
        },
      })
      return deleteEducationCategory;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
