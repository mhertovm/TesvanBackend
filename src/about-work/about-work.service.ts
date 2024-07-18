import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
    try {
      const newAboutWork = await this.myPrisma().aboutWork.create({
        data: createAboutWorkDto,
      });
      return newAboutWork;
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
      const aboutWorks = await this.myPrisma(language).aboutWork.findMany({
        select: {
          id: true,
          work: true,
        },
      });
      return aboutWorks;
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
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateAboutWorkDto: UpdateAboutWorkDto) {
    try {
      const updateAboutWork = await this.myPrisma().aboutWork.update({
        where: {
          id,
        },
        data: updateAboutWorkDto,
      });
      return updateAboutWork;
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
      const deleteAboutWork = await this.myPrisma().aboutWork.delete({
        where: {
          id,
        },
      });
      return deleteAboutWork;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
