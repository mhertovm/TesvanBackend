import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateAboutUsDto } from './dto/create-about-us.dto';
import { UpdateAboutUsDto } from './dto/update-about-us.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AboutUsService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        aboutUs: {
          metaTitle: {
            needs: {
              metaTitle_am: true,
              metaTitle_en: true,
              metaTitle_ru: true,
            },
            compute(aboutUs) {
              return aboutUs[`metaTitle_${language}`];
            },
          },
          metaDescription: {
            needs: {
              metaDescription_am: true,
              metaDescription_en: true,
              metaDescription_ru: true,
            },
            compute(aboutUs) {
              return aboutUs[`metaDescription_${language}`];
            },
          },
          content: {
            needs: { content_am: true, content_en: true, content_ru: true },
            compute(aboutUs) {
              return aboutUs[`content_${language}`];
            },
          },
        },
      },
    });
  }

  async create(createAboutUsDto: CreateAboutUsDto) {
    try {
      const newAboutUs = this.myPrisma().aboutUs.create({
        data: createAboutUsDto,
      });
      return newAboutUs;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(language: string) {
    try {
      const aboutUs = this.myPrisma(language).aboutUs.findFirst({
        select: {
          id: true,
          projects: true,
          freeCourse: true,
          employess: true,
          metaTitle: true,
          metaDescription: true,
          content: true,
        },
      });

      return aboutUs;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateAboutUsDto: UpdateAboutUsDto) {
    try {
      const updateAboutUs = this.myPrisma().aboutUs.update({
        where: {
          id,
        },
        data: updateAboutUsDto,
      });
      return updateAboutUs;
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
      const deleteAboutUs = this.myPrisma().aboutUs.delete({
        where: {
          id,
        },
      });
      return deleteAboutUs;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
