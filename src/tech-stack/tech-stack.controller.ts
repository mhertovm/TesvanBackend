import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TechStackService } from './tech-stack.service';
import { CreateTechStackDto } from './dto/create-tech-stack.dto';
import { UpdateTechStackDto } from './dto/update-tech-stack.dto';

@Controller('tech-stack')
export class TechStackController {
  constructor(private readonly techStackService: TechStackService) {}

  @Post()
  create(@Body() createTechStackDto: CreateTechStackDto) {
    return this.techStackService.create(createTechStackDto);
  }

  @Get()
  findAll() {
    return this.techStackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.techStackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTechStackDto: UpdateTechStackDto) {
    return this.techStackService.update(+id, updateTechStackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.techStackService.remove(+id);
  }
}
