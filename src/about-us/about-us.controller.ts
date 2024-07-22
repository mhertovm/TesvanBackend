import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Query,
  UseGuards,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AboutUsService } from './about-us.service';
import { UpdateAboutUsDto } from './dto/update-about-us.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('aboutUs')
@Controller('aboutUs')
export class AboutUsController {
  constructor(private readonly aboutUsService: AboutUsService) {}

  @Get()
  @ApiOperation({ summary: 'Find one aboutUs' })
  findOne(@Query('language') language: string) {
    try {
      return this.aboutUsService.findOne(language);
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
  @ApiOperation({ summary: 'Update a aboutUs' })
  update(@Param('id') id: string, @Body() updateAboutUsDto: UpdateAboutUsDto) {
    try {
      return this.aboutUsService.update(+id, updateAboutUsDto);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
