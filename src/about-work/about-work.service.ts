import { Injectable } from '@nestjs/common';
import { CreateAboutWorkDto } from './dto/create-about-work.dto';
import { UpdateAboutWorkDto } from './dto/update-about-work.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AboutWorkService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        aboutWork: {
          work: {
            needs: { work_am: true, work_en: true, work_ru: true },
            compute(aboutWork) {
              return aboutWork[`work_${language}`];
            },
          },
        },
      },
    });
  }

  async create(createAboutWorkDto: CreateAboutWorkDto) {
    const newAboutWork = await this.myPrisma().aboutWork.create({
      data: createAboutWorkDto,
    });
    return newAboutWork;
  }

  async findAll(language: string) {
    const aboutWorks = await this.myPrisma(language).aboutWork.findMany({
      select: {
        id: true,
        work: true,
      },
    });
    return aboutWorks;
  }

  async findOne(id: number, language: string) {
    const aboutWork = await this.myPrisma(language).aboutWork.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        work: true,
      },
    });
    return aboutWork;
  }

  async update(id: number, updateAboutWorkDto: UpdateAboutWorkDto) {
    const updateAboutWork = await this.myPrisma().aboutWork.update({
      where: {
        id,
      },
      data: updateAboutWorkDto,
    });
    return updateAboutWork;
  }

  async remove(id: number) {
    const deleteAboutWork = await this.myPrisma().aboutWork.delete({
      where: {
        id,
      },
    });
    return deleteAboutWork;
  }
}
