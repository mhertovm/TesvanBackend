import { Injectable } from '@nestjs/common';
import { CreateCourseLessonDto } from './dto/create-course-lesson.dto';
import { UpdateCourseLessonDto } from './dto/update-course-lesson.dto';

@Injectable()
export class CourseLessonsService {
  create(createCourseLessonDto: CreateCourseLessonDto) {
    return 'This action adds a new courseLesson';
  }

  findAll() {
    return `This action returns all courseLessons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseLesson`;
  }

  update(id: number, updateCourseLessonDto: UpdateCourseLessonDto) {
    return `This action updates a #${id} courseLesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseLesson`;
  }
}
