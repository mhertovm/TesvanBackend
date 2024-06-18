import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutWorkService } from './about-work.service';
import { CreateAboutWorkDto } from './dto/create-about-work.dto';
import { UpdateAboutWorkDto } from './dto/update-about-work.dto';

@Controller('aboutWork')
export class AboutWorkController {
  constructor(private readonly aboutWorkService: AboutWorkService) {}

  @Post()
  create(@Body() createAboutWorkDto: CreateAboutWorkDto) {
    return this.aboutWorkService.create(createAboutWorkDto);
  }

  @Get()
  findAll() {
    return this.aboutWorkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutWorkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutWorkDto: UpdateAboutWorkDto) {
    return this.aboutWorkService.update(+id, updateAboutWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutWorkService.remove(+id);
  }
}
