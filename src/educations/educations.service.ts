import { Injectable } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class EducationsService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        educations: {
          type: {
            needs: { type_am: true, type_en: true, type_ru: true },
            compute(educations) {
              return educations[`type_${language}`];
            },
          },
          education: {
            needs: {
              education_am: true,
              education_en: true,
              education_ru: true,
            },
            compute(educations) {
              return educations[`education_${language}`];
            },
          },
          metaTitle: {
            needs: {
              metaTitle_am: true,
              metaTitle_en: true,
              metaTitle_ru: true,
            },
            compute(educations) {
              return educations[`metaTitle_${language}`];
            },
          },
          metaDescription: {
            needs: {
              metaDescription_am: true,
              metaDescription_en: true,
              metaDescription_ru: true,
            },
            compute(educations) {
              return educations[`metaDescription_${language}`];
            },
          },
          content: {
            needs: { content_am: true, content_en: true, content_ru: true },
            compute(educations) {
              return educations[`content_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createEducationDto: CreateEducationDto) {
    const newEducations = await this.myPrisma().educations.create({
      data: createEducationDto,
    });
    return newEducations;
  }

  async findAll(language: string) {
    const educations = await this.myPrisma(language).educations.findMany({
      select: {
        id: true,
        type: true,
        education: true,
        metaTitle: true,
        metaDescription: true,
        image: true,
        url: true,
        content: true,
      },
    });
    return educations;
  }

  async findOne(id: number, language: string) {
    const education = await this.myPrisma(language).educations.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        type: true,
        education: true,
        metaTitle: true,
        metaDescription: true,
        image: true,
        url: true,
        content: true,
      },
    });
    return education;
  }

  async update(id: number, updateEducationDto: UpdateEducationDto) {
    const updateEducations = await this.myPrisma().educations.update({
      where: {
        id,
      },
      data: updateEducationDto,
    });
    return updateEducations;
  }

  async remove(id: number) {
    const deleteEducations = await this.myPrisma().educations.delete({
      where: {
        id,
      },
    });
    this.uploadService.deleteFile(deleteEducations.image);
    return deleteEducations;
  }
}
