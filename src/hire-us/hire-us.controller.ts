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
  HttpException,
  HttpStatus,
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
    try {
      return this.hireUsService.create(createHireUsDto);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @ApiOperation({ summary: 'Find all hireUs' })
  findAll(@Query('language') language: string) {
    try {
      return this.hireUsService.findAll(language);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one hireUs' })
  findOne(@Param('id') id: string, @Query('language') language: string) {
    try {
      return this.hireUsService.findOne(+id, language);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a hireUs' })
  update(@Param('id') id: string, @Body() updateHireUsDto: UpdateHireUsDto) {
    try {
      return this.hireUsService.update(+id, updateHireUsDto);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a hireUs' })
  remove(@Param('id') id: string) {
    try {
      return this.hireUsService.remove(+id);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
