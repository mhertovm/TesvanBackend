import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class EducationsService {
  async create(createEducationDto: CreateEducationDto) {
    try {
      const newEducations = await prisma.educations.create({
        data: createEducationDto,
      });
      return newEducations;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const educations = await prisma.educations.findMany()
      return educations;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const education = await prisma.educations.findUnique({
        where: {
          id,
        },
      })
      return education;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updateEducationDto: UpdateEducationDto) {
    try {
      const updateEducations = await prisma.educations.update({
        where: {
          id,
        },
        data: updateEducationDto
      })
      return updateEducations;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteEducations = await prisma.educations.delete({
        where: {
          id,
        },
      })
      return deleteEducations;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
