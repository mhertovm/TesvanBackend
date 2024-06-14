import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CareerResponsibilitiesService } from './career-responsibilities.service';
import { CreateCareerResponsibilityDto } from './dto/create-career-responsibility.dto';
import { UpdateCareerResponsibilityDto } from './dto/update-career-responsibility.dto';

@Controller('career-responsibilities')
export class CareerResponsibilitiesController {
  constructor(private readonly careerResponsibilitiesService: CareerResponsibilitiesService) {}

  @Post()
  create(@Body() createCareerResponsibilityDto: CreateCareerResponsibilityDto) {
    return this.careerResponsibilitiesService.create(createCareerResponsibilityDto);
  }

  @Get()
  findAll() {
    return this.careerResponsibilitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careerResponsibilitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCareerResponsibilityDto: UpdateCareerResponsibilityDto) {
    return this.careerResponsibilitiesService.update(+id, updateCareerResponsibilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careerResponsibilitiesService.remove(+id);
  }
}
