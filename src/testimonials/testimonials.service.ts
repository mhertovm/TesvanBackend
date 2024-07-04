import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        testimonials: {
          fullName: {
            needs: { fullName_am: true, fullName_en: true, fullName_ru: true },
            compute(testimonials) {
              return testimonials[`fullName_${language}`]
            }
          },
          info: {
            needs: { info_am: true, info_en: true, info_ru: true },
            compute(testimonials) {
              return testimonials[`info_${language}`]
            }
          },
          review: {
            needs: { review_am: true, review_en: true, review_ru: true },
            compute(testimonials) {
              return testimonials[`review_${language}`]
            }
          }
        }
      }
    })
  return prisma
}

@Injectable()
export class TestimonialsService {
  async create(createTestimonialDto: CreateTestimonialDto) {
    try {
      const newTestimonials = await myPrisma().testimonials.create({
        data: createTestimonialDto,
      });
      return newTestimonials;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const testimonials = await myPrisma(language).testimonials.findMany({
        select: {
          id: true,
          fullName: true,
          info: true,
          review: true,
          image: true
        }
      })
      return testimonials;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const testimonial = await myPrisma(language).testimonials.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          fullName: true,
          info: true,
          review: true,
          image: true
        }
      })
      return testimonial;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateTestimonialDto: UpdateTestimonialDto) {
    try {
      const updateTestimonials = await myPrisma().testimonials.update({
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
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteTestimonials = await myPrisma().testimonials.delete({
        where: {
          id,
        },
      })
      return deleteTestimonials;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
