import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
    try {
      const newProjectObjective = await this.myPrisma().projectObjective.create({
        data: createProjectObjectiveDto,
      });
      return newProjectObjective;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(language: string) {
    try {
      const projectObjective = await this.myPrisma(language).projectObjective.findMany({
        select: {
          id: true,
          projectId: true,
          objective: true,
        },
      });
      return projectObjective;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number, language: string) {
    try {
      const projectObjective = await this.myPrisma(language).projectObjective.findUnique({
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
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    id: number,
    updateProjectObjectiveDto: UpdateProjectObjectiveDto,
  ) {
    try {
      const updateProjectObjective = await this.myPrisma().projectObjective.update({
        where: {
          id,
        },
        data: updateProjectObjectiveDto,
      });
      return updateProjectObjective;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
      const deleteProjectObjective = await this.myPrisma().projectObjective.delete({
        where: {
          id,
        },
      });
      return deleteProjectObjective;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
