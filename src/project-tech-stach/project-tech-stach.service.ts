import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProjectTechStachDto } from './dto/create-project-tech-stach.dto';
import { UpdateProjectTechStachDto } from './dto/update-project-tech-stach.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ProjectTechStachService {
  async create(createProjectTechStachDto: CreateProjectTechStachDto) {
    try {
      const newProjectTechStach = await prisma.projectTechStach.create({
        data: createProjectTechStachDto,
      });
      return newProjectTechStach;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const projectTechStach = await prisma.projectTechStach.findMany()
      return projectTechStach;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const projectTechStach = await prisma.projectTechStach.findUnique({
        where: {
          id,
        },
      })
      return projectTechStach;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updateProjectTechStachDto: UpdateProjectTechStachDto) {
    try {
      const updateProjectTechStach = await prisma.projectTechStach.update({
        where: {
          id,
        },
        data: updateProjectTechStachDto
      })
      return updateProjectTechStach;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteProjectTechStach = await prisma.projectTechStach.delete({
        where: {
          id,
        },
      })
      return deleteProjectTechStach;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
