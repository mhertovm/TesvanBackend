import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateAboutWorkDto } from './dto/create-about-work.dto';
import { UpdateAboutWorkDto } from './dto/update-about-work.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class AboutWorkService {
  async create(createAboutWorkDto: CreateAboutWorkDto) {
    try {
      const newAboutWork = await prisma.aboutWork.create({
        data: createAboutWorkDto,
      });
      return newAboutWork;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const aboutWorks = await prisma.aboutWork.findMany()
      return aboutWorks;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const aboutWork = await prisma.aboutWork.findUnique({
        where: {
          id,
        },
      })
      return aboutWork;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updateAboutWorkDto: UpdateAboutWorkDto) {
    try {
      const updateAboutWork = await prisma.aboutWork.update({
        where: {
          id,
        },
        data: updateAboutWorkDto
      })
      return updateAboutWork;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteAboutWork = await prisma.aboutWork.delete({
        where: {
          id,
        },
      })
      return deleteAboutWork;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
