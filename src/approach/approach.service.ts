import { Injectable } from '@nestjs/common';
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
    const newApproach = await this.myPrisma().approach.create({
      data: createApproachDto,
    });
    return newApproach;
  }

  async findAll(language: string) {
    const approaches = await this.myPrisma(language).approach.findMany({
      select: {
        id: true,
        serviceId: true,
        approach: true,
      },
    });
    return approaches;
  }

  async findOne(id: number, language: string) {
    const approach = await this.myPrisma(language).approach.findUnique({
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
  }

  async update(id: number, updateApproachDto: UpdateApproachDto) {
    const updateApproach = await this.myPrisma().approach.update({
      where: {
        id,
      },
      data: updateApproachDto,
    });
    return updateApproach;
  }

  async remove(id: number) {
    const deleteApproach = await this.myPrisma().approach.delete({
      where: {
        id,
      },
    });
    return deleteApproach;
  }
}
