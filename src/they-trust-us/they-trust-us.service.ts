import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTheyTrustUsDto } from './dto/create-they-trust-us.dto';
import { UpdateTheyTrustUsDto } from './dto/update-they-trust-us.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class TheyTrustUsService {
  async create(createTheyTrustUsDto: CreateTheyTrustUsDto) {
    try {
      const newTheyTrustUs = await prisma.theyTrustUs.create({
        data: createTheyTrustUsDto,
      });
      return newTheyTrustUs;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const theyTrustUs = await prisma.theyTrustUs.findMany()
      return theyTrustUs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const theyTrustUs = await prisma.theyTrustUs.findUnique({
        where: {
          id,
        },
      })
      return theyTrustUs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateTheyTrustUsDto: UpdateTheyTrustUsDto) {
    try {
      const updateTheyTrustUs = await prisma.theyTrustUs.update({
        where: {
          id,
        },
        data: updateTheyTrustUsDto
      })
      return updateTheyTrustUs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deleteTheyTrustUs = await prisma.theyTrustUs.delete({
        where: {
          id,
        },
      })
      return deleteTheyTrustUs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
