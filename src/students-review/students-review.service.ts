import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateStudentsReviewDto } from './dto/create-students-review.dto';
import { UpdateStudentsReviewDto } from './dto/update-students-review.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class StudentsReviewService {
  async create(createStudentsReviewDto: CreateStudentsReviewDto) {
    try {
      const newStudentsReview = await prisma.studentsReview.create({
        data: createStudentsReviewDto,
      });
      return newStudentsReview;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const studentsReview = await prisma.studentsReview.findMany()
      return studentsReview;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const studentsReview = await prisma.studentsReview.findUnique({
        where: {
          id,
        },
      })
      return studentsReview;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updateStudentsReviewDto: UpdateStudentsReviewDto) {
    try {
      const updateStudentsReview = await prisma.studentsReview.update({
        where: {
          id,
        },
        data: updateStudentsReviewDto
      })
      return updateStudentsReview;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteStudentsReview = await prisma.studentsReview.delete({
        where: {
          id,
        },
      })
      return deleteStudentsReview;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
