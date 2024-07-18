import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { TheyTrustUsService } from './they-trust-us.service';
import { CreateTheyTrustUsDto } from './dto/create-they-trust-us.dto';
import { UpdateTheyTrustUsDto } from './dto/update-they-trust-us.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiConsumes,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UploadService } from 'src/upload/upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('theyTrustUs')
@Controller('theyTrustUs')
export class TheyTrustUsController {
  constructor(
    private readonly theyTrustUsService: TheyTrustUsService,
    private readonly uploadService: UploadService,
  ) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a theyTrustUs' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createTheyTrustUsDto: CreateTheyTrustUsDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    createTheyTrustUsDto.image = this.uploadService.uploadFile(image).filename;
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
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Param('id') id: string,
    @Body() updateTheyTrustUsDto: UpdateTheyTrustUsDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    if (image) {
      updateTheyTrustUsDto.image =
        this.uploadService.uploadFile(image).filename;
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
