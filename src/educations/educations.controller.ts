import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { EducationsService } from './educations.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';         
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@ApiTags('educations')
@Controller('educations')
export class EducationsController {
  constructor(private readonly educationsService: EducationsService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a educations' })
  create(@Body() createEducationDto: CreateEducationDto) {
    return this.educationsService.create(createEducationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all educations' })
  findAll(@Query('language') language: string) {
    return this.educationsService.findAll(language);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one educations' })
  findOne(@Param('id') id: string, language) {
    return this.educationsService.findOne(+id, language);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a educations' })
  update(@Param('id') id: string, @Body() updateEducationDto: UpdateEducationDto) {
    return this.educationsService.update(+id, updateEducationDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a educations' })
  remove(@Param('id') id: string) {
    return this.educationsService.remove(+id);
  }
}
