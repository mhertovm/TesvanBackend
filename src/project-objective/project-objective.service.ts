import { Injectable } from '@nestjs/common';
import { CreateProjectObjectiveDto } from './dto/create-project-objective.dto';
import { UpdateProjectObjectiveDto } from './dto/update-project-objective.dto';

@Injectable()
export class ProjectObjectiveService {
  create(createProjectObjectiveDto: CreateProjectObjectiveDto) {
    return 'This action adds a new projectObjective';
  }

  findAll() {
    return `This action returns all projectObjective`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectObjective`;
  }

  update(id: number, updateProjectObjectiveDto: UpdateProjectObjectiveDto) {
    return `This action updates a #${id} projectObjective`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectObjective`;
  }
}
