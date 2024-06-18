import { Injectable } from '@nestjs/common';
import { CreateProjectTechStachDto } from './dto/create-project-tech-stach.dto';
import { UpdateProjectTechStachDto } from './dto/update-project-tech-stach.dto';

@Injectable()
export class ProjectTechStachService {
  create(createProjectTechStachDto: CreateProjectTechStachDto) {
    return 'This action adds a new projectTechStach';
  }

  findAll() {
    return `This action returns all projectTechStach`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectTechStach`;
  }

  update(id: number, updateProjectTechStachDto: UpdateProjectTechStachDto) {
    return `This action updates a #${id} projectTechStach`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectTechStach`;
  }
}
