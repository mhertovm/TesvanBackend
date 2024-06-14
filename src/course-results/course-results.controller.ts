import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseResultsService } from './course-results.service';
import { CreateCourseResultDto } from './dto/create-course-result.dto';
import { UpdateCourseResultDto } from './dto/update-course-result.dto';

@Controller('course-results')
export class CourseResultsController {
  constructor(private readonly courseResultsService: CourseResultsService) {}

  @Post()
  create(@Body() createCourseResultDto: CreateCourseResultDto) {
    return this.courseResultsService.create(createCourseResultDto);
  }

  @Get()
  findAll() {
    return this.courseResultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseResultsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseResultDto: UpdateCourseResultDto) {
    return this.courseResultsService.update(+id, updateCourseResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseResultsService.remove(+id);
  }
}
