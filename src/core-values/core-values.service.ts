import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCoreValueDto } from './dto/create-core-value.dto';
import { UpdateCoreValueDto } from './dto/update-core-value.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class CoreValuesService {
  async create(createCoreValueDto: CreateCoreValueDto) {
    try {
      const newCoreValues = await prisma.coreValues.create({
        data: createCoreValueDto,
      });
      return newCoreValues;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const coreValues = await prisma.coreValues.findMany()
      return coreValues;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const coreValue = await prisma.coreValues.findUnique({
        where: {
          id,
        },
      })
      return coreValue;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateCoreValueDto: UpdateCoreValueDto) {
    try {
      const updateCoreValues = await prisma.coreValues.update({
        where: {
          id,
        },
        data: updateCoreValueDto
      })
      return updateCoreValues;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deleteCoreValues = await prisma.coreValues.delete({
        where: {
          id,
        },
      })
      return deleteCoreValues;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
