import { Injectable } from '@nestjs/common';
import { CreateCoreValueDto } from './dto/create-core-value.dto';
import { UpdateCoreValueDto } from './dto/update-core-value.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoreValuesService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        coreValues: {
          title: {
            needs: { title_am: true, title_en: true, title_ru: true },
            compute(coreValues) {
              return coreValues[`title_${language}`];
            },
          },
          description: {
            needs: {
              description_am: true,
              description_en: true,
              description_ru: true,
            },
            compute(coreValues) {
              return coreValues[`description_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createCoreValueDto: CreateCoreValueDto) {
    const newCoreValues = await this.myPrisma().coreValues.create({
      data: createCoreValueDto,
    });
    return newCoreValues;
  }

  async findAll(language: string) {
    const coreValues = await this.myPrisma(language).coreValues.findMany({
      select: {
        id: true,
        title: true,
        description: true,
      },
    });
    return coreValues;
  }

  async findOne(id: number, language: string) {
    const coreValue = await this.myPrisma(language).coreValues.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        description: true,
      },
    });
    return coreValue;
  }

  async update(id: number, updateCoreValueDto: UpdateCoreValueDto) {
    const updateCoreValues = await this.myPrisma().coreValues.update({
      where: {
        id,
      },
      data: updateCoreValueDto,
    });
    return updateCoreValues;
  }

  async remove(id: number) {
    const deleteCoreValues = await this.myPrisma().coreValues.delete({
      where: {
        id,
      },
    });
    return deleteCoreValues;
  }
}
