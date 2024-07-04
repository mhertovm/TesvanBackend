import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { AboutWorkService } from './about-work.service';
import { CreateAboutWorkDto } from './dto/create-about-work.dto';
import { UpdateAboutWorkDto } from './dto/update-about-work.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger'; 
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('aboutWork')
@Controller('aboutWork')
export class AboutWorkController {
  constructor(private readonly aboutWorkService: AboutWorkService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a aboutWork' }) 
  create(@Body() createAboutWorkDto: CreateAboutWorkDto) {
    return this.aboutWorkService.create(createAboutWorkDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all aboutWork' })
  findAll(@Query('language') language: string) {
    return this.aboutWorkService.findAll(language);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one aboutWork' })
  findOne(@Param('id') id: string, @Query('language') language: string) {
    return this.aboutWorkService.findOne(+id, language);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a aboutWork' })
  update(@Param('id') id: string, @Body() updateAboutWorkDto: UpdateAboutWorkDto) {
    return this.aboutWorkService.update(+id, updateAboutWorkDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a aboutWork' })
  remove(@Param('id') id: string) {
    return this.aboutWorkService.remove(+id);
  }
}
