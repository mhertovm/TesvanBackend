import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class TestimonialsService {
  async create(createTestimonialDto: CreateTestimonialDto) {
    try {
      const newTestimonials = await prisma.testimonials.create({
        data: createTestimonialDto,
      });
      return newTestimonials;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const testimonials = await prisma.testimonials.findMany()
      return testimonials;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const testimonial = await prisma.testimonials.findUnique({
        where: {
          id,
        },
      })
      return testimonial;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updateTestimonialDto: UpdateTestimonialDto) {
    try {
      const updateTestimonials = await prisma.testimonials.update({
        where: {
          id,
        },
        data: updateTestimonialDto
      })
      return updateTestimonials;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteTestimonials = await prisma.testimonials.delete({
        where: {
          id,
        },
      })
      return deleteTestimonials;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
