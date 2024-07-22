import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class BlogService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        blog: {
          metaTitle: {
            needs: {
              metaTitle_am: true,
              metaTitle_en: true,
              metaTitle_ru: true,
            },
            compute(blog) {
              return blog[`metaTitle_${language}`];
            },
          },
          metaDescription: {
            needs: {
              metaDescription_am: true,
              metaDescription_en: true,
              metaDescription_ru: true,
            },
            compute(blog) {
              return blog[`metaDescription_${language}`];
            },
          },
          duration: {
            needs: { duration_am: true, duration_en: true, duration_ru: true },
            compute(blog) {
              return blog[`duration_${language}`];
            },
          },
          content: {
            needs: { content_am: true, content_en: true, content_ru: true },
            compute(blog) {
              return blog[`content_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createBlogDto: CreateBlogDto) {
    const newBlog = await this.myPrisma().blog.create({
      data: createBlogDto,
    });
    return newBlog;
  }

  async findAll(language: string) {
    const blog = await this.myPrisma(language).blog.findMany({
      where: {
        [`metaTitle_${language}`]: {
          not: null,
        },
      },
      select: {
        id: true,
        image: true,
        url: true,
        bigImage: true,
        altText: true,
        createdAt: true,
        metaTitle: true,
        metaDescription: true,
        duration: true,
        content: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
    return blog;
  }

  async findOne(id: number, language: string) {
    const blog = await this.myPrisma(language).blog.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        image: true,
        url: true,
        bigImage: true,
        altText: true,
        createdAt: true,
        metaTitle: true,
        metaDescription: true,
        duration: true,
        content: true,
      },
    });
    return blog;
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    const updateBlog = await this.myPrisma().blog.update({
      where: {
        id,
      },
      data: updateBlogDto,
    });
    return updateBlog;
  }

  async remove(id: number) {
    const deleteBlog = await this.myPrisma().blog.delete({
      where: {
        id,
      },
    });
    this.uploadService.deleteFile(deleteBlog.image);
    this.uploadService.deleteFile(deleteBlog.bigImage);
    return deleteBlog;
  }
}
