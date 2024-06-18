import { Injectable } from '@nestjs/common';
import { CreateEducationCategoryDto } from './dto/create-education-category.dto';
import { UpdateEducationCategoryDto } from './dto/update-education-category.dto';

@Injectable()
export class EducationCategoryService {
  create(createEducationCategoryDto: CreateEducationCategoryDto) {
    return 'This action adds a new educationCategory';
  }

  findAll() {
    return `This action returns all educationCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} educationCategory`;
  }

  update(id: number, updateEducationCategoryDto: UpdateEducationCategoryDto) {
    return `This action updates a #${id} educationCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} educationCategory`;
  }
}
