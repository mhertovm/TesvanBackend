import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

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
    try {
      const newBlog = this.myPrisma().blog.create({
        data: createBlogDto,
      });
      return newBlog;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(language: string) {
    try {
      const blog = this.myPrisma(language).blog.findMany({
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
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number, language: string) {
    try {
      const blog = this.myPrisma(language).blog.findUnique({
        where: {
          id,
        },
      });
      return blog;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    try {
      const updateBlog = this.myPrisma().blog.update({
        where: {
          id,
        },
        data: updateBlogDto,
      });
      return updateBlog;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
      const deleteBlog = this.myPrisma().blog.delete({
        where: {
          id,
        },
      });
      return deleteBlog;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
