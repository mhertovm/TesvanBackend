import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateHireUsDto } from './dto/create-hire-us.dto';
import { UpdateHireUsDto } from './dto/update-hire-us.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class HireUsService {
  async create(createHireUsDto: CreateHireUsDto) {
    try {
      const newHireUs = await prisma.hireUs.create({
        data: createHireUsDto,
      });
      return newHireUs;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const hireUs = await prisma.hireUs.findMany()
      return hireUs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const hireUs = await prisma.hireUs.findUnique({
        where: {
          id,
        },
      })
      return hireUs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateHireUsDto: UpdateHireUsDto) {
    try {
      const updateHireUs = await prisma.hireUs.update({
        where: {
          id,
        },
        data: updateHireUsDto
      })
      return updateHireUs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deleteHireUs = await prisma.hireUs.delete({
        where: {
          id,
        },
      })
      return deleteHireUs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
