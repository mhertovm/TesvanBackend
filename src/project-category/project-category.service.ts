import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectCategoryDto } from './dto/update-project-category.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        projectCategory: {
          category: {
            needs: { category_am: true, category_en: true, category_ru: true },
            compute(projectCategory) {
              return projectCategory[`category_${language}`]
            }
          }
        },
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
export class ProjectCategoryService {
  async create(createProjectCategoryDto: CreateProjectCategoryDto) {
    try {
      const newProjectCategory = await myPrisma().projectCategory.create({
        data: createProjectCategoryDto,
      });
      return newProjectCategory;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const projectCategory = await myPrisma(language).projectCategory.findMany({
        select: {
          id: true,
          projectId: true,
          category: true,
          project: {
            select: {
              id: true,
              name: true,
              metaTitle: true,
              metaDescription: true,
              image: true,
              url: true
            }
          }
        },
      })
      return projectCategory;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const projectCategory = await myPrisma(language).projectCategory.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          projectId: true,
          category: true,
          project: {
            select: {
              id: true,
              name: true,
              metaTitle: true,
              metaDescription: true,
              image: true,
              url: true
            }
          }
        },
      })
      return projectCategory;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateProjectCategoryDto: UpdateProjectCategoryDto) {
    try {
      const updateProjectCategory = await myPrisma().projectCategory.update({
        where: {
          id,
        },
        data: updateProjectCategoryDto
      })
      return updateProjectCategory;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteProjectCategory = await myPrisma().projectCategory.delete({
        where: {
          id,
        },
      })
      return deleteProjectCategory;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
