import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProjectObjectiveDto } from './dto/create-project-objective.dto';
import { UpdateProjectObjectiveDto } from './dto/update-project-objective.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        projectObjective: {
          objective: {
            needs: { objective_am: true, objective_en: true, objective_ru: true },
            compute(projectObjective) {
              return projectObjective[`objective_${language}`]
            }
          }
        }
      }
    })
  return prisma
}

@Injectable()
export class ProjectObjectiveService {
  async create(createProjectObjectiveDto: CreateProjectObjectiveDto) {
    try {
      const newProjectObjective = await myPrisma().projectObjective.create({
        data: createProjectObjectiveDto,
      });
      return newProjectObjective;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const projectObjective = await myPrisma(language).projectObjective.findMany({
        select: {
          id: true,
          projectId: true,
          objective: true
        }
      })
      return projectObjective;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const projectObjective = await myPrisma(language).projectObjective.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          projectId: true,
          objective: true
        }
      })
      return projectObjective;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateProjectObjectiveDto: UpdateProjectObjectiveDto) {
    try {
      const updateProjectObjective = await myPrisma().projectObjective.update({
        where: {
          id,
        },
        data: updateProjectObjectiveDto
      })
      return updateProjectObjective;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteProjectObjective = await myPrisma().projectObjective.delete({
        where: {
          id,
        },
      })
      return deleteProjectObjective;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
