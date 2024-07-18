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
import { ProjectTechStachService } from './project-tech-stach.service';
import { CreateProjectTechStachDto } from './dto/create-project-tech-stach.dto';
import { UpdateProjectTechStachDto } from './dto/update-project-tech-stach.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiConsumes,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UploadService } from 'src/upload/upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('projectTechStach')
@Controller('projectTechStach')
export class ProjectTechStachController {
  constructor(
    private readonly projectTechStachService: ProjectTechStachService,
    private readonly uploadService: UploadService,
  ) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a projectTechStach' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() createProjectTechStachDto: CreateProjectTechStachDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    createProjectTechStachDto.image =
      this.uploadService.uploadFile(image).filename;
    return this.projectTechStachService.create(createProjectTechStachDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all projectTechStach' })
  findAll() {
    return this.projectTechStachService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one projectTechStach' })
  findOne(@Param('id') id: string) {
    return this.projectTechStachService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a projectTechStach' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Param('id') id: string,
    @Body() updateProjectTechStachDto: UpdateProjectTechStachDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    if (image) {
      updateProjectTechStachDto.image =
        this.uploadService.uploadFile(image).filename;
    }
    return this.projectTechStachService.update(+id, updateProjectTechStachDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a projectTechStach' })
  remove(@Param('id') id: string) {
    return this.projectTechStachService.remove(+id);
  }
}
