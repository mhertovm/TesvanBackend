import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        projects: {
          metaTitle: {
            needs: { metaTitle_am: true, metaTitle_en: true, metaTitle_ru: true },
            compute(projects) {
              return projects[`metaTitle_${language}`]
            }
          },
          metaDescription: {
            needs: { metaDescription_am: true, metaDescription_en: true, metaDescription_ru: true },
            compute(projects) {
              return projects[`metaDescription_${language}`]
            }
          }
        }
      }
    })
  return prisma
}

@Injectable()
export class ProjectsService {
  async create(createProjectDto: CreateProjectDto) {
    try {
      const newProjects = await myPrisma().projects.create({
        data: createProjectDto,
      });
      return newProjects;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const projects = await myPrisma(language).projects.findMany({
        select: {
          id: true,
          name: true,
          metaTitle: true,
          metaDescription: true,
          image: true,
          url: true
        }
      })
      return projects;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const project = await myPrisma(language).projects.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
          metaTitle: true,
          metaDescription: true,
          image: true,
          url: true
        }
      })
      return project;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    try {
      const updateProjects = await myPrisma().projects.update({
        where: {
          id,
        },
        data: updateProjectDto
      })
      return updateProjects;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteProjects = await myPrisma().projects.delete({
        where: {
          id,
        },
      })
      return deleteProjects;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
