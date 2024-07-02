import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StudentsReviewService } from './students-review.service';
import { CreateStudentsReviewDto } from './dto/create-students-review.dto';
import { UpdateStudentsReviewDto } from './dto/update-students-review.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';    
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';   

@ApiTags('studentsReview')
@Controller('studentsReview')
export class StudentsReviewController {
  constructor(private readonly studentsReviewService: StudentsReviewService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a studentsReview' })
  create(@Body() createStudentsReviewDto: CreateStudentsReviewDto) {
    return this.studentsReviewService.create(createStudentsReviewDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all studentsReview' })
  findAll() {
    return this.studentsReviewService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one studentsReview' })
  findOne(@Param('id') id: string) {
    return this.studentsReviewService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a studentsReview' })
  update(@Param('id') id: string, @Body() updateStudentsReviewDto: UpdateStudentsReviewDto) {
    return this.studentsReviewService.update(+id, updateStudentsReviewDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a studentsReview' })
  remove(@Param('id') id: string) {
    return this.studentsReviewService.remove(+id);
  }
}
