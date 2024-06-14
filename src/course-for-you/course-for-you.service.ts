import { Injectable } from '@nestjs/common';
import { CreateCourseForYouDto } from './dto/create-course-for-you.dto';
import { UpdateCourseForYouDto } from './dto/update-course-for-you.dto';

@Injectable()
export class CourseForYouService {
  create(createCourseForYouDto: CreateCourseForYouDto) {
    return 'This action adds a new courseForYou';
  }

  findAll() {
    return `This action returns all courseForYou`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseForYou`;
  }

  update(id: number, updateCourseForYouDto: UpdateCourseForYouDto) {
    return `This action updates a #${id} courseForYou`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseForYou`;
  }
}
