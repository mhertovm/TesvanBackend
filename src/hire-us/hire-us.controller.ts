import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { HireUsService } from './hire-us.service';
import { CreateHireUsDto } from './dto/create-hire-us.dto';
import { UpdateHireUsDto } from './dto/update-hire-us.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('hireUs')
@Controller('hireUs')
export class HireUsController {
  constructor(private readonly hireUsService: HireUsService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a hireUs' })
  create(@Body() createHireUsDto: CreateHireUsDto) {
    return this.hireUsService.create(createHireUsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all hireUs' })
  findAll(@Query('language') language: string) {
    return this.hireUsService.findAll(language);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one hireUs' })
  findOne(@Param('id') id: string, @Query('language') language: string) {
    return this.hireUsService.findOne(+id, language);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a hireUs' })
  update(@Param('id') id: string, @Body() updateHireUsDto: UpdateHireUsDto) {
    return this.hireUsService.update(+id, updateHireUsDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a hireUs' })
  remove(@Param('id') id: string) {
    return this.hireUsService.remove(+id);
  }
}
