import { Injectable } from '@nestjs/common';
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
    const newAboutUs = await this.myPrisma().aboutUs.create({
      data: createAboutUsDto,
    });
    return newAboutUs;
  }

  async findOne(language: string) {
    const aboutUs = await this.myPrisma(language).aboutUs.findFirst({
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
  }

  async update(updateAboutUsDto: UpdateAboutUsDto) {
    const updateAboutUs = await this.myPrisma().aboutUs.update({
      where: {
        id: 1,
      },
      data: updateAboutUsDto,
    });
    return updateAboutUs;
  }

  async remove(id: number) {
    const deleteAboutUs = await this.myPrisma().aboutUs.delete({
      where: {
        id,
      },
    });
    return deleteAboutUs;
  }
}
