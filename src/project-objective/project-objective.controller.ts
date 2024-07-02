import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProjectObjectiveService } from './project-objective.service';
import { CreateProjectObjectiveDto } from './dto/create-project-objective.dto';
import { UpdateProjectObjectiveDto } from './dto/update-project-objective.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';     

@ApiTags('projectObjective')
@Controller('projectObjective')
export class ProjectObjectiveController {
  constructor(private readonly projectObjectiveService: ProjectObjectiveService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a projectObjective' })
  create(@Body() createProjectObjectiveDto: CreateProjectObjectiveDto) {
    return this.projectObjectiveService.create(createProjectObjectiveDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all projectObjective' })
  findAll() {
    return this.projectObjectiveService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one projectObjective' })
  findOne(@Param('id') id: string) {
    return this.projectObjectiveService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a projectObjective' })
  update(@Param('id') id: string, @Body() updateProjectObjectiveDto: UpdateProjectObjectiveDto) {
    return this.projectObjectiveService.update(+id, updateProjectObjectiveDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a projectObjective' })
  remove(@Param('id') id: string) {
    return this.projectObjectiveService.remove(+id);
  }
}
