import { Injectable } from '@nestjs/common';
import { CreateProjectDetailDto } from './dto/create-project-detail.dto';
import { UpdateProjectDetailDto } from './dto/update-project-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class ProjectDetailService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
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
      },
    });
  }
  async create(createProjectDetailDto: CreateProjectDetailDto) {
    const newProjectDetail = await this.myPrisma().projectDetail.create({
      data: createProjectDetailDto,
    });
    return newProjectDetail;
  }

  async findAll(language: string) {
    const projectDetail = await this.myPrisma(language).projectDetail.findMany({
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
    });
    return projectDetail;
  }

  async findOne(id: number, language: string) {
    const projectDetail = await this.myPrisma(
      language,
    ).projectDetail.findUnique({
      where: {
        id,
      },
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
    });
    return projectDetail;
  }

  async update(id: number, updateProjectDetailDto: UpdateProjectDetailDto) {
    const updateProjectDetail = await this.myPrisma().projectDetail.update({
      where: {
        id,
      },
      data: updateProjectDetailDto,
    });
    return updateProjectDetail;
  }

  async remove(id: number) {
    const deleteProjectDetail = await this.myPrisma().projectDetail.delete({
      where: {
        id,
      },
    });
    this.uploadService.deleteFile(deleteProjectDetail.image);
    return deleteProjectDetail;
  }
}
