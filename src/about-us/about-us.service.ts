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
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne() {
    try {
      const aboutUs = await prisma.aboutUs.findFirst()
      return aboutUs;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
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
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
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
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
