import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateApproachDto } from './dto/create-approach.dto';
import { UpdateApproachDto } from './dto/update-approach.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ApproachService {
  async create(createApproachDto: CreateApproachDto) {
    try {
      const newApproach = await prisma.approach.create({
        data: createApproachDto,
      });
      return newApproach;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const approaches = await prisma.approach.findMany()
      return approaches;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const approach = await prisma.approach.findUnique({
        where: {
          id,
        },
      })
      return approach;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updateApproachDto: UpdateApproachDto) {
    try {
      const updateApproach = await prisma.approach.update({
        where: {
          id,
        },
        data: updateApproachDto
      })
      return updateApproach;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteApproach = await prisma.approach.delete({
        where: {
          id,
        },
      })
      return deleteApproach;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
