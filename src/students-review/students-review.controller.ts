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
  UploadedFile,
} from '@nestjs/common';
import { StudentsReviewService } from './students-review.service';
import { CreateStudentsReviewDto } from './dto/create-students-review.dto';
import { UpdateStudentsReviewDto } from './dto/update-students-review.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiConsumes,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UploadService } from 'src/upload/upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('studentsReview')
@Controller('studentsReview')
export class StudentsReviewController {
  constructor(
    private readonly studentsReviewService: StudentsReviewService,
    private readonly uploadService: UploadService,
  ) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a studentsReview' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createStudentsReviewDto: CreateStudentsReviewDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    createStudentsReviewDto.image =
      this.uploadService.uploadFile(image).filename;
    return this.studentsReviewService.create(createStudentsReviewDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all studentsReview' })
  findAll(@Query('language') language: string) {
    return this.studentsReviewService.findAll(language);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one studentsReview' })
  findOne(@Param('id') id: string, @Query('language') language: string) {
    return this.studentsReviewService.findOne(+id, language);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a studentsReview' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Param('id') id: string,
    @Body() updateStudentsReviewDto: UpdateStudentsReviewDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    if (image) {
      updateStudentsReviewDto.image =
        this.uploadService.uploadFile(image).filename;
    }
    return this.studentsReviewService.update(+id, updateStudentsReviewDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a studentsReview' })
  remove(@Param('id') id: string) {
    return this.studentsReviewService.remove(+id);
  }
}
