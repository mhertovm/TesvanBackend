import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProjectObjectiveDto } from './dto/create-project-objective.dto';
import { UpdateProjectObjectiveDto } from './dto/update-project-objective.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ProjectObjectiveService {
  async create(createProjectObjectiveDto: CreateProjectObjectiveDto) {
    try {
      const newProjectObjective = await prisma.projectObjective.create({
        data: createProjectObjectiveDto,
      });
      return newProjectObjective;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const projectObjective = await prisma.projectObjective.findMany()
      return projectObjective;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const projectObjective = await prisma.projectObjective.findUnique({
        where: {
          id,
        },
      })
      return projectObjective;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateProjectObjectiveDto: UpdateProjectObjectiveDto) {
    try {
      const updateProjectObjective = await prisma.projectObjective.update({
        where: {
          id,
        },
        data: updateProjectObjectiveDto
      })
      return updateProjectObjective;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deleteProjectObjective = await prisma.projectObjective.delete({
        where: {
          id,
        },
      })
      return deleteProjectObjective;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
