import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseLessonsService } from './course-lessons.service';
import { CreateCourseLessonDto } from './dto/create-course-lesson.dto';
import { UpdateCourseLessonDto } from './dto/update-course-lesson.dto';

@Controller('course-lessons')
export class CourseLessonsController {
  constructor(private readonly courseLessonsService: CourseLessonsService) {}

  @Post()
  create(@Body() createCourseLessonDto: CreateCourseLessonDto) {
    return this.courseLessonsService.create(createCourseLessonDto);
  }

  @Get()
  findAll() {
    return this.courseLessonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseLessonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseLessonDto: UpdateCourseLessonDto) {
    return this.courseLessonsService.update(+id, updateCourseLessonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseLessonsService.remove(+id);
  }
}
