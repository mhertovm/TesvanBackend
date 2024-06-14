import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CareerQualificationsService } from './career-qualifications.service';
import { CreateCareerQualificationDto } from './dto/create-career-qualification.dto';
import { UpdateCareerQualificationDto } from './dto/update-career-qualification.dto';

@Controller('career-qualifications')
export class CareerQualificationsController {
  constructor(private readonly careerQualificationsService: CareerQualificationsService) {}

  @Post()
  create(@Body() createCareerQualificationDto: CreateCareerQualificationDto) {
    return this.careerQualificationsService.create(createCareerQualificationDto);
  }

  @Get()
  findAll() {
    return this.careerQualificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careerQualificationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCareerQualificationDto: UpdateCareerQualificationDto) {
    return this.careerQualificationsService.update(+id, updateCareerQualificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careerQualificationsService.remove(+id);
  }
}
