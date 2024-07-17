import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateStudentsReviewDto } from './dto/create-students-review.dto';
import { UpdateStudentsReviewDto } from './dto/update-students-review.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentsReviewService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        studentsReview: {
          fullName: {
            needs: { fullName_am: true, fullName_en: true, fullName_ru: true },
            compute(studentsReview) {
              return studentsReview[`fullName_${language}`];
            },
          },
          info: {
            needs: { info_am: true, info_en: true, info_ru: true },
            compute(studentsReview) {
              return studentsReview[`info_${language}`];
            },
          },
          review: {
            needs: { review_am: true, review_en: true, review_ru: true },
            compute(studentsReview) {
              return studentsReview[`review_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createStudentsReviewDto: CreateStudentsReviewDto) {
    try {
      const newStudentsReview = this.myPrisma().studentsReview.create({
        data: createStudentsReviewDto,
      });
      return newStudentsReview;
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
      const studentsReview = this.myPrisma(language).studentsReview.findMany({
        select: {
          id: true,
          fullName: true,
          info: true,
          review: true,
          image: true,
        },
      });
      return studentsReview;
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
      const studentsReview = this.myPrisma(language).studentsReview.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          fullName: true,
          info: true,
          review: true,
          image: true,
        },
      });
      return studentsReview;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateStudentsReviewDto: UpdateStudentsReviewDto) {
    try {
      const updateStudentsReview = this.myPrisma().studentsReview.update({
        where: {
          id,
        },
        data: updateStudentsReviewDto,
      });
      return updateStudentsReview;
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
      const deleteStudentsReview = this.myPrisma().studentsReview.delete({
        where: {
          id,
        },
      });
      return deleteStudentsReview;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
