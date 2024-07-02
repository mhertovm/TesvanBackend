import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AboutWorkService } from './about-work.service';
import { CreateAboutWorkDto } from './dto/create-about-work.dto';
import { UpdateAboutWorkDto } from './dto/update-about-work.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'; 
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('aboutWork')
@Controller('aboutWork')
export class AboutWorkController {
  constructor(private readonly aboutWorkService: AboutWorkService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a aboutWork' }) 
  create(@Body() createAboutWorkDto: CreateAboutWorkDto) {
    return this.aboutWorkService.create(createAboutWorkDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all aboutWork' })
  findAll() {
    return this.aboutWorkService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one aboutWork' })
  findOne(@Param('id') id: string) {
    return this.aboutWorkService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a aboutWork' })
  update(@Param('id') id: string, @Body() updateAboutWorkDto: UpdateAboutWorkDto) {
    return this.aboutWorkService.update(+id, updateAboutWorkDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a aboutWork' })
  remove(@Param('id') id: string) {
    return this.aboutWorkService.remove(+id);
  }
}
