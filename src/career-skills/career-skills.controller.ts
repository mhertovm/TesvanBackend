import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CareerSkillsService } from './career-skills.service';
import { CreateCareerSkillDto } from './dto/create-career-skill.dto';
import { UpdateCareerSkillDto } from './dto/update-career-skill.dto';

@Controller('career-skills')
export class CareerSkillsController {
  constructor(private readonly careerSkillsService: CareerSkillsService) {}

  @Post()
  create(@Body() createCareerSkillDto: CreateCareerSkillDto) {
    return this.careerSkillsService.create(createCareerSkillDto);
  }

  @Get()
  findAll() {
    return this.careerSkillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careerSkillsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCareerSkillDto: UpdateCareerSkillDto) {
    return this.careerSkillsService.update(+id, updateCareerSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careerSkillsService.remove(+id);
  }
}
