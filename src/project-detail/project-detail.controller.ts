import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectDetailService } from './project-detail.service';
import { CreateProjectDetailDto } from './dto/create-project-detail.dto';
import { UpdateProjectDetailDto } from './dto/update-project-detail.dto';

@Controller('project-detail')
export class ProjectDetailController {
  constructor(private readonly projectDetailService: ProjectDetailService) {}

  @Post()
  create(@Body() createProjectDetailDto: CreateProjectDetailDto) {
    return this.projectDetailService.create(createProjectDetailDto);
  }

  @Get()
  findAll() {
    return this.projectDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDetailDto: UpdateProjectDetailDto) {
    return this.projectDetailService.update(+id, updateProjectDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectDetailService.remove(+id);
  }
}
