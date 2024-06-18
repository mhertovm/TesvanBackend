import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EducationCategoryService } from './education-category.service';
import { CreateEducationCategoryDto } from './dto/create-education-category.dto';
import { UpdateEducationCategoryDto } from './dto/update-education-category.dto';

@Controller('education-category')
export class EducationCategoryController {
  constructor(private readonly educationCategoryService: EducationCategoryService) {}

  @Post()
  create(@Body() createEducationCategoryDto: CreateEducationCategoryDto) {
    return this.educationCategoryService.create(createEducationCategoryDto);
  }

  @Get()
  findAll() {
    return this.educationCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEducationCategoryDto: UpdateEducationCategoryDto) {
    return this.educationCategoryService.update(+id, updateEducationCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationCategoryService.remove(+id);
  }
}
