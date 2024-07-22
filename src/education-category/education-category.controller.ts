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
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { EducationCategoryService } from './education-category.service';
import { CreateEducationCategoryDto } from './dto/create-education-category.dto';
import { UpdateEducationCategoryDto } from './dto/update-education-category.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('educationCategory')
@Controller('educationCategory')
export class EducationCategoryController {
  constructor(
    private readonly educationCategoryService: EducationCategoryService,
  ) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a educationCategory' })
  create(@Body() createEducationCategoryDto: CreateEducationCategoryDto) {
    try {
      return this.educationCategoryService.create(createEducationCategoryDto);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @ApiOperation({ summary: 'Find all educationCategory' })
  findAll(@Query('language') language: string) {
    try {
      return this.educationCategoryService.findAll(language);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one educationCategory' })
  findOne(@Param('id') id: string, language: string) {
    try {
      return this.educationCategoryService.findOne(+id, language);
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
  @ApiOperation({ summary: 'Update a educationCategory' })
  update(
    @Param('id') id: string,
    @Body() updateEducationCategoryDto: UpdateEducationCategoryDto,
  ) {
    try {
      return this.educationCategoryService.update(
        +id,
        updateEducationCategoryDto,
      );
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
  @ApiOperation({ summary: 'Delete a educationCategory' })
  remove(@Param('id') id: string) {
    try {
      return this.educationCategoryService.remove(+id);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
