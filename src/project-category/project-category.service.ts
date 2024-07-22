import { Injectable } from '@nestjs/common';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectCategoryDto } from './dto/update-project-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectCategoryService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        projectCategory: {
          category: {
            needs: { category_am: true, category_en: true, category_ru: true },
            compute(projectCategory) {
              return projectCategory[`category_${language}`];
            },
          },
        },
        projects: {
          metaTitle: {
            needs: {
              metaTitle_am: true,
              metaTitle_en: true,
              metaTitle_ru: true,
            },
            compute(projects) {
              return projects[`metaTitle_${language}`];
            },
          },
          metaDescription: {
            needs: {
              metaDescription_am: true,
              metaDescription_en: true,
              metaDescription_ru: true,
            },
            compute(projects) {
              return projects[`metaDescription_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createProjectCategoryDto: CreateProjectCategoryDto) {
    const newProjectCategory = await this.myPrisma().projectCategory.create({
      data: createProjectCategoryDto,
    });
    return newProjectCategory;
  }

  async findAll(language: string) {
    const projectCategory = await this.myPrisma(
      language,
    ).projectCategory.findMany({
      select: {
        id: true,
        category: true,
        projects: {
          select: {
            id: true,
            name: true,
            metaTitle: true,
            metaDescription: true,
            image: true,
            url: true,
          },
        },
      },
    });
    return projectCategory;
  }

  async findOne(id: number, language: string) {
    const projectCategory = await this.myPrisma(
      language,
    ).projectCategory.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        category: true,
        projects: {
          select: {
            id: true,
            name: true,
            metaTitle: true,
            metaDescription: true,
            image: true,
            url: true,
          },
        },
      },
    });
    return projectCategory;
  }

  async update(id: number, updateProjectCategoryDto: UpdateProjectCategoryDto) {
    const updateProjectCategory = await this.myPrisma().projectCategory.update({
      where: {
        id,
      },
      data: updateProjectCategoryDto,
    });
    return updateProjectCategory;
  }

  async remove(id: number) {
    const deleteProjectCategory = await this.myPrisma().projectCategory.delete({
      where: {
        id,
      },
    });
    return deleteProjectCategory;
  }
}
