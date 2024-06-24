import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePageTitleDto } from './dto/create-page-title.dto';
import { UpdatePageTitleDto } from './dto/update-page-title.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class PageTitlesService {
  async create(createPageTitleDto: CreatePageTitleDto) {
    try {
      const newAboutWork = await prisma.pageTitles.create({
        data: createPageTitleDto,
      });
      return newAboutWork;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const pageTitles = await prisma.pageTitles.findMany()
      return pageTitles;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const pageTitl = await prisma.pageTitles.findUnique({
        where: {
          id,
        },
      })
      return pageTitl;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updatePageTitleDto: UpdatePageTitleDto) {
    try {
      const updatePageTitles = await prisma.pageTitles.update({
        where: {
          id,
        },
        data: updatePageTitleDto
      })
      return updatePageTitles;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deletePageTitles = await prisma.pageTitles.delete({
        where: {
          id,
        },
      })
      return deletePageTitles;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
