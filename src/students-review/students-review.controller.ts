import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsReviewService } from './students-review.service';
import { CreateStudentsReviewDto } from './dto/create-students-review.dto';
import { UpdateStudentsReviewDto } from './dto/update-students-review.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('studentsReview')
@Controller('studentsReview')
export class StudentsReviewController {
  constructor(private readonly studentsReviewService: StudentsReviewService) {}

  @Post()
  create(@Body() createStudentsReviewDto: CreateStudentsReviewDto) {
    return this.studentsReviewService.create(createStudentsReviewDto);
  }

  @Get()
  findAll() {
    return this.studentsReviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsReviewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentsReviewDto: UpdateStudentsReviewDto) {
    return this.studentsReviewService.update(+id, updateStudentsReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsReviewService.remove(+id);
  }
}
