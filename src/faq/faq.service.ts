import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class FaqService {
  async create(createFaqDto: CreateFaqDto) {
    try {
      const newFaq = await prisma.faq.create({
        data: createFaqDto,
      });
      return newFaq;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const faq = await prisma.faq.findMany()
      return faq;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const faq = await prisma.faq.findUnique({
        where: {
          id,
        },
      })
      return faq;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updateFaqDto: UpdateFaqDto) {
    try {
      const updateFaq = await prisma.faq.update({
        where: {
          id,
        },
        data: updateFaqDto
      })
      return updateFaq;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteFaq = await prisma.faq.delete({
        where: {
          id,
        },
      })
      return deleteFaq;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
