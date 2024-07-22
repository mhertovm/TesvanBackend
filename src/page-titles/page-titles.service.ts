import { Injectable } from '@nestjs/common';
import { CreatePageTitleDto } from './dto/create-page-title.dto';
import { UpdatePageTitleDto } from './dto/update-page-title.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class PageTitlesService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        pageTitles: {
          metaTitle: {
            needs: {
              metaTitle_am: true,
              metaTitle_en: true,
              metaTitle_ru: true,
            },
            compute(pageTitles) {
              return pageTitles[`metaTitle_${language}`];
            },
          },
          metaDescription: {
            needs: {
              metaDescription_am: true,
              metaDescription_en: true,
              metaDescription_ru: true,
            },
            compute(pageTitles) {
              return pageTitles[`metaDescription_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createPageTitleDto: CreatePageTitleDto) {
    const newAboutWork = await this.myPrisma().pageTitles.create({
      data: createPageTitleDto,
    });
    return newAboutWork;
  }

  async findAll(language: string) {
    const pageTitles = await this.myPrisma(language).pageTitles.findMany({
      select: {
        id: true,
        metaTitle: true,
        metaDescription: true,
        students: true,
        joinedOurTeam: true,
        image: true,
        type: true,
      },
    });
    return pageTitles;
  }

  async findOne(id: number, language: string) {
    const pageTitl = await this.myPrisma(language).pageTitles.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        metaTitle: true,
        metaDescription: true,
        students: true,
        joinedOurTeam: true,
        image: true,
        type: true,
      },
    });
    return pageTitl;
  }

  async update(id: number, updatePageTitleDto: UpdatePageTitleDto) {
    const updatePageTitles = await this.myPrisma().pageTitles.update({
      where: {
        id,
      },
      data: updatePageTitleDto,
    });
    return updatePageTitles;
  }

  async remove(id: number) {
    const deletePageTitles = await this.myPrisma().pageTitles.delete({
      where: {
        id,
      },
    });
    this.uploadService.deleteFile(deletePageTitles.image);
    return deletePageTitles;
  }
}
