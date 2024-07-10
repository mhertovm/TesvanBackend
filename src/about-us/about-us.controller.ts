import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { AboutUsService } from './about-us.service';
import { CreateAboutUsDto } from './dto/create-about-us.dto';
import { UpdateAboutUsDto } from './dto/update-about-us.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';     

@ApiTags('aboutUs')
@Controller('aboutUs')
export class AboutUsController {
  constructor(private readonly aboutUsService: AboutUsService) { }

  @Get()
  @ApiOperation({ summary: 'Find one aboutUs' })
  findOne(@Query('language') language: string) {
    return this.aboutUsService.findOne(language);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token') 
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a aboutUs' })
  update(@Param('id') id: string, @Body() updateAboutUsDto: UpdateAboutUsDto) {
    return this.aboutUsService.update(+id, updateAboutUsDto);
  }
}
