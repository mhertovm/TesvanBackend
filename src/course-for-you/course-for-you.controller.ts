import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseForYouService } from './course-for-you.service';
import { CreateCourseForYouDto } from './dto/create-course-for-you.dto';
import { UpdateCourseForYouDto } from './dto/update-course-for-you.dto';

@Controller('course-for-you')
export class CourseForYouController {
  constructor(private readonly courseForYouService: CourseForYouService) {}

  @Post()
  create(@Body() createCourseForYouDto: CreateCourseForYouDto) {
    return this.courseForYouService.create(createCourseForYouDto);
  }

  @Get()
  findAll() {
    return this.courseForYouService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseForYouService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseForYouDto: UpdateCourseForYouDto) {
    return this.courseForYouService.update(+id, updateCourseForYouDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseForYouService.remove(+id);
  }
}
