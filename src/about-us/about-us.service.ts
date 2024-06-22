import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateAboutUsDto } from './dto/create-about-us.dto';
import { UpdateAboutUsDto } from './dto/update-about-us.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class AboutUsService {
  async create(createAboutUsDto: CreateAboutUsDto) {
    try {
      const newAboutUs = await prisma.aboutUs.create({
        data: createAboutUsDto
      });
      return newAboutUs;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const aboutUs = await prisma.aboutUs.findMany()
      return aboutUs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const aboutUs = await prisma.aboutUs.findUnique({
        where: {
          id,
        },
      })
      return aboutUs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateAboutUsDto: UpdateAboutUsDto) {
    try {
      const updateAboutUs = await prisma.aboutUs.update({
        where: {
          id,
        },
        data: updateAboutUsDto
      })
      return updateAboutUs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deleteAboutUs = await prisma.aboutUs.delete({
        where: {
          id,
        },
      })
      return deleteAboutUs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
