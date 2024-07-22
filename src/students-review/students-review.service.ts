import { Injectable } from '@nestjs/common';
import { CreateStudentsReviewDto } from './dto/create-students-review.dto';
import { UpdateStudentsReviewDto } from './dto/update-students-review.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class StudentsReviewService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}

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
    const newStudentsReview = await this.myPrisma().studentsReview.create({
      data: createStudentsReviewDto,
    });
    return newStudentsReview;
  }

  async findAll(language: string) {
    const studentsReview = await this.myPrisma(
      language,
    ).studentsReview.findMany({
      select: {
        id: true,
        fullName: true,
        info: true,
        review: true,
        image: true,
      },
    });
    return studentsReview;
  }

  async findOne(id: number, language: string) {
    const studentsReview = await this.myPrisma(
      language,
    ).studentsReview.findUnique({
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
  }

  async update(id: number, updateStudentsReviewDto: UpdateStudentsReviewDto) {
    const updateStudentsReview = await this.myPrisma().studentsReview.update({
      where: {
        id,
      },
      data: updateStudentsReviewDto,
    });
    return updateStudentsReview;
  }

  async remove(id: number) {
    const deleteStudentsReview = await this.myPrisma().studentsReview.delete({
      where: {
        id,
      },
    });
    this.uploadService.deleteFile(deleteStudentsReview.image);
    return deleteStudentsReview;
  }
}
