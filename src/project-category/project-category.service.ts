import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectCategoryDto } from './dto/update-project-category.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ProjectCategoryService {
  async create(createProjectCategoryDto: CreateProjectCategoryDto) {
    try {
      const newProjectCategory = await prisma.projectCategory.create({
        data: createProjectCategoryDto,
      });
      return newProjectCategory;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const projectCategory = await prisma.projectCategory.findMany()
      return projectCategory;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const projectCategory = await prisma.projectCategory.findUnique({
        where: {
          id,
        },
      })
      return projectCategory;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateProjectCategoryDto: UpdateProjectCategoryDto) {
    try {
      const updateProjectCategory = await prisma.projectCategory.update({
        where: {
          id,
        },
        data: updateProjectCategoryDto
      })
      return updateProjectCategory;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deleteProjectCategory = await prisma.projectCategory.delete({
        where: {
          id,
        },
      })
      return deleteProjectCategory;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
