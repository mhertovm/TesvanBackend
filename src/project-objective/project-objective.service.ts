import { Injectable } from '@nestjs/common';
import { CreateProjectObjectiveDto } from './dto/create-project-objective.dto';
import { UpdateProjectObjectiveDto } from './dto/update-project-objective.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectObjectiveService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        projectObjective: {
          objective: {
            needs: {
              objective_am: true,
              objective_en: true,
              objective_ru: true,
            },
            compute(projectObjective) {
              return projectObjective[`objective_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createProjectObjectiveDto: CreateProjectObjectiveDto) {
    const newProjectObjective = await this.myPrisma().projectObjective.create({
      data: createProjectObjectiveDto,
    });
    return newProjectObjective;
  }

  async findAll(language: string) {
    const projectObjective = await this.myPrisma(
      language,
    ).projectObjective.findMany({
      select: {
        id: true,
        projectId: true,
        objective: true,
      },
    });
    return projectObjective;
  }

  async findOne(id: number, language: string) {
    const projectObjective = await this.myPrisma(
      language,
    ).projectObjective.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        projectId: true,
        objective: true,
      },
    });
    return projectObjective;
  }

  async update(
    id: number,
    updateProjectObjectiveDto: UpdateProjectObjectiveDto,
  ) {
    const updateProjectObjective =
      await this.myPrisma().projectObjective.update({
        where: {
          id,
        },
        data: updateProjectObjectiveDto,
      });
    return updateProjectObjective;
  }

  async remove(id: number) {
    const deleteProjectObjective =
      await this.myPrisma().projectObjective.delete({
        where: {
          id,
        },
      });
    return deleteProjectObjective;
  }
}
