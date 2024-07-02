import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProjectTechStachService } from './project-tech-stach.service';
import { CreateProjectTechStachDto } from './dto/create-project-tech-stach.dto';
import { UpdateProjectTechStachDto } from './dto/update-project-tech-stach.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';    
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@ApiTags('projectTechStach')
@Controller('projectTechStach')
export class ProjectTechStachController {
  constructor(private readonly projectTechStachService: ProjectTechStachService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a projectTechStach' })
  create(@Body() createProjectTechStachDto: CreateProjectTechStachDto) {
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
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a projectTechStach' })
  update(@Param('id') id: string, @Body() updateProjectTechStachDto: UpdateProjectTechStachDto) {
    return this.projectTechStachService.update(+id, updateProjectTechStachDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a projectTechStach' })
  remove(@Param('id') id: string) {
    return this.projectTechStachService.remove(+id);
  }
}
