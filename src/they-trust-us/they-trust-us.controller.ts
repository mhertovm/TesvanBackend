import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, UseInterceptors } from '@nestjs/common';
import { TheyTrustUsService } from './they-trust-us.service';
import { CreateTheyTrustUsDto } from './dto/create-they-trust-us.dto';
import { UpdateTheyTrustUsDto } from './dto/update-they-trust-us.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UploadService } from 'src/upload/upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('theyTrustUs')
@Controller('theyTrustUs')
export class TheyTrustUsController {
  constructor(private readonly theyTrustUsService: TheyTrustUsService, private readonly uploadService: UploadService) { }

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a theyTrustUs' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() createTheyTrustUsDto: CreateTheyTrustUsDto, file: Express.Multer.File) {
    createTheyTrustUsDto.image = this.uploadService.uploadFile(file).filename
    return this.theyTrustUsService.create(createTheyTrustUsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all theyTrustUs' })
  findAll() {
    return this.theyTrustUsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one theyTrustUs' })
  findOne(@Param('id') id: string) {
    return this.theyTrustUsService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a theyTrustUs' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  update(@Param('id') id: string, @Body() updateTheyTrustUsDto: UpdateTheyTrustUsDto, file: Express.Multer.File) {
    if (file) {
      updateTheyTrustUsDto.image = this.uploadService.uploadFile(file).filename
    }
    return this.theyTrustUsService.update(+id, updateTheyTrustUsDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a theyTrustUs' })
  remove(@Param('id') id: string) {
    return this.theyTrustUsService.remove(+id);
  }
}
