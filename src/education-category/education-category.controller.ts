import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EducationCategoryService } from './education-category.service';
import { CreateEducationCategoryDto } from './dto/create-education-category.dto';
import { UpdateEducationCategoryDto } from './dto/update-education-category.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';      
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';    

@ApiTags('educationCategory')
@Controller('educationCategory')
export class EducationCategoryController {
  constructor(private readonly educationCategoryService: EducationCategoryService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a educationCategory' })
  create(@Body() createEducationCategoryDto: CreateEducationCategoryDto) {
    return this.educationCategoryService.create(createEducationCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all educationCategory' })
  findAll() {
    return this.educationCategoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one educationCategory' })
  findOne(@Param('id') id: string) {
    return this.educationCategoryService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a educationCategory' })
  update(@Param('id') id: string, @Body() updateEducationCategoryDto: UpdateEducationCategoryDto) {
    return this.educationCategoryService.update(+id, updateEducationCategoryDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a educationCategory' })
  remove(@Param('id') id: string) {
    return this.educationCategoryService.remove(+id);
  }
}
