import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
    try {
      const newHireUs = this.myPrisma().hireUs.create({
        data: createHireUsDto,
      });
      return newHireUs;
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
      const hireUs = this.myPrisma(language).hireUs.findMany({
        select: {
          id: true,
          hire: true,
        },
      });
      return hireUs;
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
      const hireUs = this.myPrisma(language).hireUs.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          hire: true,
        },
      });
      return hireUs;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateHireUsDto: UpdateHireUsDto) {
    try {
      const updateHireUs = this.myPrisma().hireUs.update({
        where: {
          id,
        },
        data: updateHireUsDto,
      });
      return updateHireUs;
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
      const deleteHireUs = this.myPrisma().hireUs.delete({
        where: {
          id,
        },
      });
      return deleteHireUs;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
