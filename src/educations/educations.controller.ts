import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EducationsService } from './educations.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('educations')
@Controller('educations')
export class EducationsController {
  constructor(private readonly educationsService: EducationsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a educations' })
  create(@Body() createEducationDto: CreateEducationDto) {
    return this.educationsService.create(createEducationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all educations' })
  findAll() {
    return this.educationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one educations' })
  findOne(@Param('id') id: string) {
    return this.educationsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a educations' })
  update(@Param('id') id: string, @Body() updateEducationDto: UpdateEducationDto) {
    return this.educationsService.update(+id, updateEducationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a educations' })
  remove(@Param('id') id: string) {
    return this.educationsService.remove(+id);
  }
}
