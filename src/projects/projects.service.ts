import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class ProjectsService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
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
        projectDetail: {
          industry: {
            needs: { industry_am: true, industry_en: true, industry_ru: true },
            compute(projectDetail) {
              return projectDetail[`industry_${language}`];
            },
          },
          location: {
            needs: { location_am: true, location_en: true, location_ru: true },
            compute(projectDetail) {
              return projectDetail[`location_${language}`];
            },
          },
          duration: {
            needs: { duration_am: true, duration_en: true, duration_ru: true },
            compute(projectDetail) {
              return projectDetail[`duration_${language}`];
            },
          },
          team: {
            needs: { team_am: true, team_en: true, team_ru: true },
            compute(projectDetail) {
              return projectDetail[`team_${language}`];
            },
          },
          overview: {
            needs: { overview_am: true, overview_en: true, overview_ru: true },
            compute(projectDetail) {
              return projectDetail[`overview_${language}`];
            },
          },
          challenge: {
            needs: {
              challenge_am: true,
              challenge_en: true,
              challenge_ru: true,
            },
            compute(projectDetail) {
              return projectDetail[`challenge_${language}`];
            },
          },
          solution: {
            needs: { solution_am: true, solution_en: true, solution_ru: true },
            compute(projectDetail) {
              return projectDetail[`solution_${language}`];
            },
          },
          result: {
            needs: { result_am: true, result_en: true, result_ru: true },
            compute(projectDetail) {
              return projectDetail[`result_${language}`];
            },
          },
        },
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
  async create(createProjectDto: CreateProjectDto) {
    const newProjects = await this.myPrisma().projects.create({
      data: createProjectDto,
    });
    return newProjects;
  }

  async findAll(language: string) {
    const projects = await this.myPrisma(language).projects.findMany({
      select: {
        id: true,
        name: true,
        metaTitle: true,
        metaDescription: true,
        image: true,
        url: true,
        projectTechStack: true,
        projectDetail: {
          select: {
            id: true,
            projectId: true,
            industry: true,
            location: true,
            duration: true,
            team: true,
            overview: true,
            challenge: true,
            solution: true,
            result: true,
            image: true,
          },
        },
        projectObjective: {
          select: {
            id: true,
            projectId: true,
            objective: true,
          },
        },
      },
    });
    return projects;
  }

  async findOne(id: number, language: string) {
    const project = await this.myPrisma(language).projects.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        metaTitle: true,
        metaDescription: true,
        image: true,
        url: true,
        projectTechStack: true,
        projectDetail: {
          select: {
            id: true,
            projectId: true,
            industry: true,
            location: true,
            duration: true,
            team: true,
            overview: true,
            challenge: true,
            solution: true,
            result: true,
            image: true,
          },
        },
        projectObjective: {
          select: {
            id: true,
            projectId: true,
            objective: true,
          },
        },
      },
    });
    return project;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const updateProjects = await this.myPrisma().projects.update({
      where: {
        id,
      },
      data: updateProjectDto,
    });
    return updateProjects;
  }

  async remove(id: number) {
    const deleteProjects = await this.myPrisma().projects.delete({
      where: {
        id,
      },
    });
    this.uploadService.deleteFile(deleteProjects.image);
    return deleteProjects;
  }
}
