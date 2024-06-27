import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { UpdateBenefitDto } from './dto/update-benefit.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class BenefitsService {
  async create(createBenefitDto: CreateBenefitDto) {
    try {
      const newBenefit = await prisma.benefits.create({
        data: createBenefitDto,
      });
      return newBenefit;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const benefits = await prisma.benefits.findMany()
      return benefits;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const benefit = await prisma.benefits.findUnique({
        where: {
          id,
        },
      })
      return benefit;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updateBenefitDto: UpdateBenefitDto) {
    try {
      const updateBenefit = await prisma.benefits.update({
        where: {
          id,
        },
        data: updateBenefitDto
      })
      return updateBenefit;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteBenefit = await prisma.benefits.delete({
        where: {
          id,
        },
      })
      return deleteBenefit;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
