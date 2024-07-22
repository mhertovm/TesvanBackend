import { Injectable } from '@nestjs/common';
import { CreateHireUsDto } from './dto/create-hire-us.dto';
import { UpdateHireUsDto } from './dto/update-hire-us.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HireUsService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        hireUs: {
          hire: {
            needs: { hire_am: true, hire_en: true, hire_ru: true },
            compute(hireUs) {
              return hireUs[`hire_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createHireUsDto: CreateHireUsDto) {
    const newHireUs = await this.myPrisma().hireUs.create({
      data: createHireUsDto,
    });
    return newHireUs;
  }

  async findAll(language: string) {
    const hireUs = await this.myPrisma(language).hireUs.findMany({
      select: {
        id: true,
        hire: true,
      },
    });
    return hireUs;
  }

  async findOne(id: number, language: string) {
    const hireUs = await this.myPrisma(language).hireUs.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        hire: true,
      },
    });
    return hireUs;
  }

  async update(id: number, updateHireUsDto: UpdateHireUsDto) {
    const updateHireUs = await this.myPrisma().hireUs.update({
      where: {
        id,
      },
      data: updateHireUsDto,
    });
    return updateHireUs;
  }

  async remove(id: number) {
    const deleteHireUs = await this.myPrisma().hireUs.delete({
      where: {
        id,
      },
    });
    return deleteHireUs;
  }
}
