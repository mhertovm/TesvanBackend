import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService, private uploadService: UploadService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        courses: {
          metaTitle: {
            needs: {
              metaTitle_am: true,
              metaTitle_en: true,
              metaTitle_ru: true,
            },
            compute(courses) {
              return courses[`metaTitle_${language}`];
            },
          },
          metaDescription: {
            needs: {
              metaDescription_am: true,
              metaDescription_en: true,
              metaDescription_ru: true,
            },
            compute(courses) {
              return courses[`metaDescription_${language}`];
            },
          },
          duration: {
            needs: { duration_am: true, duration_en: true, duration_ru: true },
            compute(courses) {
              return courses[`duration_${language}`];
            },
          },
          price: {
            needs: { price_am: true, price_en: true, price_ru: true },
            compute(courses) {
              return courses[`price_${language}`];
            },
          },
          description: {
            needs: {
              description_am: true,
              description_en: true,
              description_ru: true,
            },
            compute(courses) {
              return courses[`description_${language}`];
            },
          },
          level: {
            needs: { level_am: true, level_en: true, level_ru: true },
            compute(courses) {
              return courses[`level_${language}`];
            },
          },
          type: {
            needs: { type_am: true, type_en: true, type_ru: true },
            compute(courses) {
              return courses[`type_${language}`];
            },
          },
          days: {
            needs: { days_am: true, days_en: true, days_ru: true },
            compute(courses) {
              return courses[`days_${language}`];
            },
          },
          lessonTime: {
            needs: {
              lessonTime_am: true,
              lessonTime_en: true,
              lessonTime_ru: true,
            },
            compute(courses) {
              return courses[`lessonTime_${language}`];
            },
          },
          courseDescription: {
            needs: {
              courseDescription_am: true,
              courseDescription_en: true,
              courseDescription_ru: true,
            },
            compute(courses) {
              return courses[`courseDescription_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createCourseDto: CreateCourseDto) {
    try {
      const newCourses = await this.myPrisma().courses.create({
        data: createCourseDto,
      });
      return newCourses;
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
      const courses = await this.myPrisma(language).courses.findMany({
        select: {
          id: true,
          metaTitle: true,
          metaDescription: true,
          url: true,
          start: true,
          duration: true,
          price: true,
          deadline: true,
          description: true,
          level: true,
          type: true,
          days: true,
          lessonTime: true,
          courseDescription: true,
          image: true,
          altText: true,
        },
      });
      return courses;
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
      const course = await this.myPrisma(language).courses.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          metaTitle: true,
          metaDescription: true,
          url: true,
          start: true,
          duration: true,
          price: true,
          deadline: true,
          description: true,
          level: true,
          type: true,
          days: true,
          lessonTime: true,
          courseDescription: true,
          image: true,
          altText: true,
        },
      });
      return course;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    try {
      const updateCourses = await this.myPrisma().courses.update({
        where: {
          id,
        },
        data: updateCourseDto,
      });
      return updateCourses;
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
      const deleteCourses = await this.myPrisma().courses.delete({
        where: {
          id,
        },
      });
      this.uploadService.deleteFile(deleteCourses.image)
      return deleteCourses;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
