import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProjectDetailDto } from './dto/create-project-detail.dto';
import { UpdateProjectDetailDto } from './dto/update-project-detail.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        projectDetail: {
          industry: {
            needs: { industry_am: true, industry_en: true, industry_ru: true },
            compute(projectDetail) {
              return projectDetail[`industry_${language}`]
            }
          },
          location: {
            needs: { location_am: true, location_en: true, location_ru: true },
            compute(projectDetail) {
              return projectDetail[`location_${language}`]
            }
          },
          duration: {
            needs: { duration_am: true, duration_en: true, duration_ru: true },
            compute(projectDetail) {
              return projectDetail[`duration_${language}`]
            }
          },
          team: {
            needs: { team_am: true, team_en: true, team_ru: true },
            compute(projectDetail) {
              return projectDetail[`team_${language}`]
            }
          },
          overview: {
            needs: { overview_am: true, overview_en: true, overview_ru: true },
            compute(projectDetail) {
              return projectDetail[`overview_${language}`]
            }
          },
          challenge: {
            needs: { challenge_am: true, challenge_en: true, challenge_ru: true },
            compute(projectDetail) {
              return projectDetail[`challenge_${language}`]
            }
          },
          solution: {
            needs: { solution_am: true, solution_en: true, solution_ru: true },
            compute(projectDetail) {
              return projectDetail[`solution_${language}`]
            }
          },
          result: {
            needs: { result_am: true, result_en: true, result_ru: true },
            compute(projectDetail) {
              return projectDetail[`result_${language}`]
            }
          }
        }
      }
    })
  return prisma
}

@Injectable()
export class ProjectDetailService {
  async create(createProjectDetailDto: CreateProjectDetailDto) {
    try {
      const newProjectDetail = await myPrisma().projectDetail.create({
        data: createProjectDetailDto,
      });
      return newProjectDetail;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const projectDetail = await myPrisma(language).projectDetail.findMany({
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
          image: true
        }
      })
      return projectDetail;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const projectDetail = await myPrisma(language).projectDetail.findUnique({
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
          image: true
        }
      })
      return projectDetail;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateProjectDetailDto: UpdateProjectDetailDto) {
    try {
      const updateProjectDetail = await myPrisma().projectDetail.update({
        where: {
          id,
        },
        data: updateProjectDetailDto
      })
      return updateProjectDetail;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteProjectDetail = await myPrisma().projectDetail.delete({
        where: {
          id,
        },
      })
      return deleteProjectDetail;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
