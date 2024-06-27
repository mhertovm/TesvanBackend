import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProjectDetailDto } from './dto/create-project-detail.dto';
import { UpdateProjectDetailDto } from './dto/update-project-detail.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ProjectDetailService {
  async create(createProjectDetailDto: CreateProjectDetailDto) {
    try {
      const newProjectDetail = await prisma.projectDetail.create({
        data: createProjectDetailDto,
      });
      return newProjectDetail;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const projectDetail = await prisma.projectDetail.findMany()
      return projectDetail;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const projectDetail = await prisma.projectDetail.findUnique({
        where: {
          id,
        },
      })
      return projectDetail;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updateProjectDetailDto: UpdateProjectDetailDto) {
    try {
      const updateProjectDetail = await prisma.projectDetail.update({
        where: {
          id,
        },
        data: updateProjectDetailDto
      })
      return updateProjectDetail;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteProjectDetail = await prisma.projectDetail.delete({
        where: {
          id,
        },
      })
      return deleteProjectDetail;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
