import { Injectable } from '@nestjs/common';
import { CreateCourseSyllabusDto } from './dto/create-course-syllabus.dto';
import { UpdateCourseSyllabusDto } from './dto/update-course-syllabus.dto';

@Injectable()
export class CourseSyllabusService {
  create(createCourseSyllabusDto: CreateCourseSyllabusDto) {
    return 'This action adds a new courseSyllabus';
  }

  findAll() {
    return `This action returns all courseSyllabus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseSyllabus`;
  }

  update(id: number, updateCourseSyllabusDto: UpdateCourseSyllabusDto) {
    return `This action updates a #${id} courseSyllabus`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseSyllabus`;
  }
}
