import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AboutUsService } from './about-us.service';
import { CreateAboutUsDto } from './dto/create-about-us.dto';
import { UpdateAboutUsDto } from './dto/update-about-us.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('aboutUs')
@Controller('aboutUs')
export class AboutUsController {
  constructor(private readonly aboutUsService: AboutUsService) { }

  @Post()
  @ApiOperation({ summary: 'Create a aboutUs' })
  create(@Body() createAboutUsDto: CreateAboutUsDto) {
    return this.aboutUsService.create(createAboutUsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find one aboutUs' })
  findOne(@Query('language') language: string) {
    return this.aboutUsService.findOne(language);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a aboutUs' })
  update(@Param('id') id: string, @Body() updateAboutUsDto: UpdateAboutUsDto) {
    return this.aboutUsService.update(+id, updateAboutUsDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a aboutUs' })
  remove(@Param('id') id: string) {
    return this.aboutUsService.remove(+id);
  }
}
