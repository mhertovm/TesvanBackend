import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ProjectsService {
  async create(createProjectDto: CreateProjectDto) {
    try {
      const newProjects = await prisma.projects.create({
        data: createProjectDto,
      });
      return newProjects;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const projects = await prisma.projects.findMany()
      return projects;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const project = await prisma.projects.findUnique({
        where: {
          id,
        },
      })
      return project;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    try {
      const updateProjects = await prisma.projects.update({
        where: {
          id,
        },
        data: updateProjectDto
      })
      return updateProjects;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deleteProjects = await prisma.projects.delete({
        where: {
          id,
        },
      })
      return deleteProjects;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
