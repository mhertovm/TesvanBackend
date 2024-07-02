import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HireUsService } from './hire-us.service';
import { CreateHireUsDto } from './dto/create-hire-us.dto';
import { UpdateHireUsDto } from './dto/update-hire-us.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';   
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';   

@ApiTags('hireUs')
@Controller('hireUs')
export class HireUsController {
  constructor(private readonly hireUsService: HireUsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a hireUs' })
  update(@Param('id') id: string, @Body() updateHireUsDto: UpdateHireUsDto) {
    return this.hireUsService.update(+id, updateHireUsDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a hireUs' })
  remove(@Param('id') id: string) {
    return this.hireUsService.remove(+id);
  }
}
