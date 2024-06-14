import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseSyllabusService } from './course-syllabus.service';
import { CreateCourseSyllabusDto } from './dto/create-course-syllabus.dto';
import { UpdateCourseSyllabusDto } from './dto/update-course-syllabus.dto';

@Controller('course-syllabus')
export class CourseSyllabusController {
  constructor(private readonly courseSyllabusService: CourseSyllabusService) {}

  @Post()
  create(@Body() createCourseSyllabusDto: CreateCourseSyllabusDto) {
    return this.courseSyllabusService.create(createCourseSyllabusDto);
  }

  @Get()
  findAll() {
    return this.courseSyllabusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseSyllabusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseSyllabusDto: UpdateCourseSyllabusDto) {
    return this.courseSyllabusService.update(+id, updateCourseSyllabusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseSyllabusService.remove(+id);
  }
}
