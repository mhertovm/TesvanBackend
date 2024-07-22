import { Injectable } from '@nestjs/common';
import { CreateProjectTechStachDto } from './dto/create-project-tech-stach.dto';
import { UpdateProjectTechStachDto } from './dto/update-project-tech-stach.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class ProjectTechStachService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}
  async create(createProjectTechStachDto: CreateProjectTechStachDto) {
    const newProjectTechStach = this.prisma.projectTechStack.create({
      data: createProjectTechStachDto,
    });
    return newProjectTechStach;
  }

  async findAll() {
    const projectTechStach = await this.prisma.projectTechStack.findMany();
    return projectTechStach;
  }

  async findOne(id: number) {
    const projectTechStach = await this.prisma.projectTechStack.findUnique({
      where: {
        id,
      },
    });
    return projectTechStach;
  }

  async update(
    id: number,
    updateProjectTechStachDto: UpdateProjectTechStachDto,
  ) {
    const updateProjectTechStach = await this.prisma.projectTechStack.update({
      where: {
        id,
      },
      data: updateProjectTechStachDto,
    });
    return updateProjectTechStach;
  }

  async remove(id: number) {
    const deleteProjectTechStach = await this.prisma.projectTechStack.delete({
      where: {
        id,
      },
    });
    this.uploadService.deleteFile(deleteProjectTechStach.image);
    return deleteProjectTechStach;
  }
}
