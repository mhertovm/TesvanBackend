import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ServicesService {
  async create(createServiceDto: CreateServiceDto) {
    try {
      const newServices = await prisma.services.create({
        data: createServiceDto,
      });
      return newServices;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const services = await prisma.services.findMany()
      return services;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const servic = await prisma.services.findUnique({
        where: {
          id,
        },
      })
      return servic;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    try {
      const updateServices = await prisma.services.update({
        where: {
          id,
        },
        data: updateServiceDto
      })
      return updateServices;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deleteServices = await prisma.services.delete({
        where: {
          id,
        },
      })
      return deleteServices;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
