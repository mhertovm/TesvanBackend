import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HireUsService } from './hire-us.service';
import { CreateHireUsDto } from './dto/create-hire-us.dto';
import { UpdateHireUsDto } from './dto/update-hire-us.dto';

@Controller('hireUs')
export class HireUsController {
  constructor(private readonly hireUsService: HireUsService) {}

  @Post()
  create(@Body() createHireUsDto: CreateHireUsDto) {
    return this.hireUsService.create(createHireUsDto);
  }

  @Get()
  findAll() {
    return this.hireUsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hireUsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHireUsDto: UpdateHireUsDto) {
    return this.hireUsService.update(+id, updateHireUsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hireUsService.remove(+id);
  }
}
