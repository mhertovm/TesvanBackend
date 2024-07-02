import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProjectCategoryService } from './project-category.service';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectCategoryDto } from './dto/update-project-category.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';        
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@ApiTags('projectCategory')
@Controller('projectCategory')
export class ProjectCategoryController {
  constructor(private readonly projectCategoryService: ProjectCategoryService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a projectCategory' })
  create(@Body() createProjectCategoryDto: CreateProjectCategoryDto) {
    return this.projectCategoryService.create(createProjectCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all projectCategory' })
  findAll() {
    return this.projectCategoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one projectCategory' })
  findOne(@Param('id') id: string) {
    return this.projectCategoryService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a projectCategory' })
  update(@Param('id') id: string, @Body() updateProjectCategoryDto: UpdateProjectCategoryDto) {
    return this.projectCategoryService.update(+id, updateProjectCategoryDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a projectCategory' })
  remove(@Param('id') id: string) {
    return this.projectCategoryService.remove(+id);
  }
}
