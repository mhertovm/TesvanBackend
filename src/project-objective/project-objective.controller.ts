import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectObjectiveService } from './project-objective.service';
import { CreateProjectObjectiveDto } from './dto/create-project-objective.dto';
import { UpdateProjectObjectiveDto } from './dto/update-project-objective.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('projectObjective')
@Controller('projectObjective')
export class ProjectObjectiveController {
  constructor(private readonly projectObjectiveService: ProjectObjectiveService) {}

  @Post()
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
  @ApiOperation({ summary: 'Update a projectObjective' })
  update(@Param('id') id: string, @Body() updateProjectObjectiveDto: UpdateProjectObjectiveDto) {
    return this.projectObjectiveService.update(+id, updateProjectObjectiveDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a projectObjective' })
  remove(@Param('id') id: string) {
    return this.projectObjectiveService.remove(+id);
  }
}
