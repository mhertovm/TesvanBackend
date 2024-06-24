import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HireUsService } from './hire-us.service';
import { CreateHireUsDto } from './dto/create-hire-us.dto';
import { UpdateHireUsDto } from './dto/update-hire-us.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('hireUs')
@Controller('hireUs')
export class HireUsController {
  constructor(private readonly hireUsService: HireUsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a hireUs' })
  create(@Body() createHireUsDto: CreateHireUsDto) {
    return this.hireUsService.create(createHireUsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all hireUs' })
  findAll() {
    return this.hireUsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one hireUs' })
  findOne(@Param('id') id: string) {
    return this.hireUsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a hireUs' })
  update(@Param('id') id: string, @Body() updateHireUsDto: UpdateHireUsDto) {
    return this.hireUsService.update(+id, updateHireUsDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a hireUs' })
  remove(@Param('id') id: string) {
    return this.hireUsService.remove(+id);
  }
}
