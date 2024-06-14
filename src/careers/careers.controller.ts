import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';

@Controller('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}

  @Post()
  create(@Body() createCareerDto: CreateCareerDto) {
    return this.careersService.create(createCareerDto);
  }

  @Get()
  findAll() {
    return this.careersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCareerDto: UpdateCareerDto) {
    return this.careersService.update(+id, updateCareerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careersService.remove(+id);
  }
}
