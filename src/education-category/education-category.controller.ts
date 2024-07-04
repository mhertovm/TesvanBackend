import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { EducationCategoryService } from './education-category.service';
import { CreateEducationCategoryDto } from './dto/create-education-category.dto';
import { UpdateEducationCategoryDto } from './dto/update-education-category.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';      
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';    

@ApiTags('educationCategory')
@Controller('educationCategory')
export class EducationCategoryController {
  constructor(private readonly educationCategoryService: EducationCategoryService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a educationCategory' })
  create(@Body() createEducationCategoryDto: CreateEducationCategoryDto) {
    return this.educationCategoryService.create(createEducationCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all educationCategory' })
  findAll(@Query('language') language: string) {
    return this.educationCategoryService.findAll(language);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one educationCategory' })
  findOne(@Param('id') id: string, language) {
    return this.educationCategoryService.findOne(+id, language);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a educationCategory' })
  update(@Param('id') id: string, @Body() updateEducationCategoryDto: UpdateEducationCategoryDto) {
    return this.educationCategoryService.update(+id, updateEducationCategoryDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a educationCategory' })
  remove(@Param('id') id: string) {
    return this.educationCategoryService.remove(+id);
  }
}
