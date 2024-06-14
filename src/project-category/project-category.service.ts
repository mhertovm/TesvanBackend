import { Injectable } from '@nestjs/common';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectCategoryDto } from './dto/update-project-category.dto';

@Injectable()
export class ProjectCategoryService {
  create(createProjectCategoryDto: CreateProjectCategoryDto) {
    return 'This action adds a new projectCategory';
  }

  findAll() {
    return `This action returns all projectCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectCategory`;
  }

  update(id: number, updateProjectCategoryDto: UpdateProjectCategoryDto) {
    return `This action updates a #${id} projectCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectCategory`;
  }
}
