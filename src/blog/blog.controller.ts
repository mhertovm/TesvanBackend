import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiConsumes,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UploadService } from 'src/upload/upload.service';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
  constructor(
    private readonly blogService: BlogService,
    private readonly uploadService: UploadService,
  ) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a blog' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(AnyFilesInterceptor())
  create(
    @Body() createBlogDto: CreateBlogDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    try {
      const imageFile = files.find((file) => file.fieldname === 'image');
      const bigImageFile = files.find((file) => file.fieldname === 'bigImage');
      createBlogDto.image = this.uploadService.uploadFile(imageFile).filename;
      createBlogDto.bigImage =
        this.uploadService.uploadFile(bigImageFile).filename;
      return this.blogService.create(createBlogDto);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @ApiOperation({ summary: 'Find all blog' })
  findAll(@Query('language') language: string) {
    try {
      return this.blogService.findAll(language);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one blog' })
  findOne(@Param('id') id: string, @Query('language') language: string) {
    try {
      return this.blogService.findOne(+id, language);
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
  @ApiOperation({ summary: 'Update a blog' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(AnyFilesInterceptor())
  update(
    @Param('id') id: string,
    @Body() updateBlogDto: UpdateBlogDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    try {
      if (files) {
        const imageFile = files.find((file) => file.fieldname === 'image');
        const bigImageFile = files.find(
          (file) => file.fieldname === 'bigImage',
        );
        if (imageFile) {
          updateBlogDto.image =
            this.uploadService.uploadFile(imageFile).filename;
        }
        if (bigImageFile) {
          updateBlogDto.bigImage =
            this.uploadService.uploadFile(bigImageFile).filename;
        }
      }
      return this.blogService.update(+id, updateBlogDto);
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
  @ApiOperation({ summary: 'Delete a blog' })
  remove(@Param('id') id: string) {
    try {
      return this.blogService.remove(+id);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
