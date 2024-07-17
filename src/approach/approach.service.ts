import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateApproachDto } from './dto/create-approach.dto';
import { UpdateApproachDto } from './dto/update-approach.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApproachService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        approach: {
          approach: {
            needs: { approach_am: true, approach_en: true, approach_ru: true },
            compute(approach) {
              return approach[`approach_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createApproachDto: CreateApproachDto) {
    try {
      const newApproach = this.myPrisma().approach.create({
        data: createApproachDto,
      });
      return newApproach;
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
      const approaches = this.myPrisma(language).approach.findMany({
        select: {
          id: true,
          serviceId: true,
          approach: true,
        },
      });
      return approaches;
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
      const approach = this.myPrisma(language).approach.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          serviceId: true,
          approach: true,
        },
      });
      return approach;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateApproachDto: UpdateApproachDto) {
    try {
      const updateApproach = this.myPrisma().approach.update({
        where: {
          id,
        },
        data: updateApproachDto,
      });
      return updateApproach;
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
      const deleteApproach = this.myPrisma().approach.delete({
        where: {
          id,
        },
      });
      return deleteApproach;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
