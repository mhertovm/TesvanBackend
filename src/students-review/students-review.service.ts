import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateStudentsReviewDto } from './dto/create-students-review.dto';
import { UpdateStudentsReviewDto } from './dto/update-students-review.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        studentsReview: {
          fullName: {
            needs: { fullName_am: true, fullName_en: true, fullName_ru: true },
            compute(studentsReview) {
              return studentsReview[`fullName_${language}`]
            }
          },
          info: {
            needs: { info_am: true, info_en: true, info_ru: true },
            compute(studentsReview) {
              return studentsReview[`info_${language}`]
            }
          },
          review: {
            needs: { review_am: true, review_en: true, review_ru: true },
            compute(studentsReview) {
              return studentsReview[`review_${language}`]
            }
          }
        }
      }
    })
  return prisma
}

@Injectable()
export class StudentsReviewService {
  async create(createStudentsReviewDto: CreateStudentsReviewDto) {
    try {
      const newStudentsReview = await myPrisma().studentsReview.create({
        data: createStudentsReviewDto,
      });
      return newStudentsReview;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const studentsReview = await myPrisma(language).studentsReview.findMany({
        select: {
          id: true,
          fullName: true,
          info: true,
          review: true,
          image: true
        }
      })
      return studentsReview;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const studentsReview = await myPrisma(language).studentsReview.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          fullName: true,
          info: true,
          review: true,
          image: true
        }
      })
      return studentsReview;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateStudentsReviewDto: UpdateStudentsReviewDto) {
    try {
      const updateStudentsReview = await myPrisma().studentsReview.update({
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
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteStudentsReview = await myPrisma().studentsReview.delete({
        where: {
          id,
        },
      })
      return deleteStudentsReview;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
