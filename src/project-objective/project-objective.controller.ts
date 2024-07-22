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
import { ProjectObjectiveService } from './project-objective.service';
import { CreateProjectObjectiveDto } from './dto/create-project-objective.dto';
import { UpdateProjectObjectiveDto } from './dto/update-project-objective.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('projectObjective')
@Controller('projectObjective')
export class ProjectObjectiveController {
  constructor(
    private readonly projectObjectiveService: ProjectObjectiveService,
  ) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a projectObjective' })
  create(@Body() createProjectObjectiveDto: CreateProjectObjectiveDto) {
    try {
      return this.projectObjectiveService.create(createProjectObjectiveDto);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @ApiOperation({ summary: 'Find all projectObjective' })
  findAll(@Query('language') language: string) {
    try {
      return this.projectObjectiveService.findAll(language);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one projectObjective' })
  findOne(@Param('id') id: string, @Query('language') language: string) {
    try {
      return this.projectObjectiveService.findOne(+id, language);
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
  @ApiOperation({ summary: 'Update a projectObjective' })
  update(
    @Param('id') id: string,
    @Body() updateProjectObjectiveDto: UpdateProjectObjectiveDto,
  ) {
    try {
      return this.projectObjectiveService.update(
        +id,
        updateProjectObjectiveDto,
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
  @ApiOperation({ summary: 'Delete a projectObjective' })
  remove(@Param('id') id: string) {
    try {
      return this.projectObjectiveService.remove(+id);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
