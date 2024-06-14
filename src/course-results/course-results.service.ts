import { Injectable } from '@nestjs/common';
import { CreateCourseResultDto } from './dto/create-course-result.dto';
import { UpdateCourseResultDto } from './dto/update-course-result.dto';

@Injectable()
export class CourseResultsService {
  create(createCourseResultDto: CreateCourseResultDto) {
    return 'This action adds a new courseResult';
  }

  findAll() {
    return `This action returns all courseResults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseResult`;
  }

  update(id: number, updateCourseResultDto: UpdateCourseResultDto) {
    return `This action updates a #${id} courseResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseResult`;
  }
}
