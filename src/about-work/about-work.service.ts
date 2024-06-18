import { Injectable } from '@nestjs/common';
import { CreateAboutWorkDto } from './dto/create-about-work.dto';
import { UpdateAboutWorkDto } from './dto/update-about-work.dto';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AboutWorkService {
  async create(createAboutWorkDto: CreateAboutWorkDto) {
    const newAboutWork = await prisma.aboutWork.create({
      data: createAboutWorkDto,
    });
    return newAboutWork;
  }

  async findAll() {
    const aboutWorks = await prisma.aboutWork.findMany()
    return aboutWorks;
  }

  async findOne(id: number) {
    const aboutWork = await prisma.aboutWork.findUnique({
      where: {
        id
      },
    })
    return aboutWork;
  }

  async update(id: number, updateAboutWorkDto: UpdateAboutWorkDto) {
    const updateAboutWork = await prisma.aboutWork.update({
      where: {
        id,
      },
      data: updateAboutWorkDto
    })
    return updateAboutWork;
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
      return `not found`
    }
  }
}
