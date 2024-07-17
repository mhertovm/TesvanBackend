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
  UseInterceptors,
} from '@nestjs/common';
import { EducationsService } from './educations.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiConsumes,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';

@ApiTags('educations')
@Controller('educations')
export class EducationsController {
  constructor(
    private readonly educationsService: EducationsService,
    private readonly uploadService: UploadService,
  ) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a educations' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() createEducationDto: CreateEducationDto,
    file: Express.Multer.File,
  ) {
    createEducationDto.image = this.uploadService.uploadFile(file).filename;
    return this.educationsService.create(createEducationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all educations' })
  findAll(@Query('language') language: string) {
    return this.educationsService.findAll(language);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one educations' })
  findOne(@Param('id') id: string, language) {
    return this.educationsService.findOne(+id, language);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a educations' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  update(
    @Param('id') id: string,
    @Body() updateEducationDto: UpdateEducationDto,
    file: Express.Multer.File,
  ) {
    if (file) {
      updateEducationDto.image = this.uploadService.uploadFile(file).filename;
    }
    return this.educationsService.update(+id, updateEducationDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a educations' })
  remove(@Param('id') id: string) {
    return this.educationsService.remove(+id);
  }
}
