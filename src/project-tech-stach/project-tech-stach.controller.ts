import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectTechStachService } from './project-tech-stach.service';
import { CreateProjectTechStachDto } from './dto/create-project-tech-stach.dto';
import { UpdateProjectTechStachDto } from './dto/update-project-tech-stach.dto';

@Controller('project-tech-stach')
export class ProjectTechStachController {
  constructor(private readonly projectTechStachService: ProjectTechStachService) {}

  @Post()
  create(@Body() createProjectTechStachDto: CreateProjectTechStachDto) {
    return this.projectTechStachService.create(createProjectTechStachDto);
  }

  @Get()
  findAll() {
    return this.projectTechStachService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectTechStachService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectTechStachDto: UpdateProjectTechStachDto) {
    return this.projectTechStachService.update(+id, updateProjectTechStachDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectTechStachService.remove(+id);
  }
}
