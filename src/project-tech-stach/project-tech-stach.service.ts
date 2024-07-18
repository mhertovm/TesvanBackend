import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProjectTechStachDto } from './dto/create-project-tech-stach.dto';
import { UpdateProjectTechStachDto } from './dto/update-project-tech-stach.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectTechStachService {
  constructor(private prisma: PrismaService) {}
  async create(createProjectTechStachDto: CreateProjectTechStachDto) {
    try {
      const newProjectTechStach = this.prisma.projectTechStack.create({
        data: createProjectTechStachDto,
      });
      return newProjectTechStach;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const projectTechStach = await this.prisma.projectTechStack.findMany();
      return projectTechStach;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    try {
      const projectTechStach = await this.prisma.projectTechStack.findUnique({
        where: {
          id,
        },
      });
      return projectTechStach;
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
    updateProjectTechStachDto: UpdateProjectTechStachDto,
  ) {
    try {
      const updateProjectTechStach = await this.prisma.projectTechStack.update({
        where: {
          id,
        },
        data: updateProjectTechStachDto,
      });
      return updateProjectTechStach;
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
      const deleteProjectTechStach = await this.prisma.projectTechStack.delete({
        where: {
          id,
        },
      });
      return deleteProjectTechStach;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
