import { Injectable } from '@nestjs/common';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class TestimonialsService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        testimonials: {
          fullName: {
            needs: { fullName_am: true, fullName_en: true, fullName_ru: true },
            compute(testimonials) {
              return testimonials[`fullName_${language}`];
            },
          },
          info: {
            needs: { info_am: true, info_en: true, info_ru: true },
            compute(testimonials) {
              return testimonials[`info_${language}`];
            },
          },
          review: {
            needs: { review_am: true, review_en: true, review_ru: true },
            compute(testimonials) {
              return testimonials[`review_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createTestimonialDto: CreateTestimonialDto) {
    const newTestimonials = await this.myPrisma().testimonials.create({
      data: createTestimonialDto,
    });
    return newTestimonials;
  }

  async findAll(language: string) {
    const testimonials = await this.myPrisma(language).testimonials.findMany({
      select: {
        id: true,
        fullName: true,
        info: true,
        review: true,
        image: true,
      },
    });
    return testimonials;
  }

  async findOne(id: number, language: string) {
    const testimonial = await this.myPrisma(language).testimonials.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        fullName: true,
        info: true,
        review: true,
        image: true,
      },
    });
    return testimonial;
  }

  async update(id: number, updateTestimonialDto: UpdateTestimonialDto) {
    const updateTestimonials = await this.myPrisma().testimonials.update({
      where: {
        id,
      },
      data: updateTestimonialDto,
    });
    return updateTestimonials;
  }

  async remove(id: number) {
    const deleteTestimonials = await this.myPrisma().testimonials.delete({
      where: {
        id,
      },
    });
    this.uploadService.deleteFile(deleteTestimonials.image);
    return deleteTestimonials;
  }
}
