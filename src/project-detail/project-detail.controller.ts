import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProjectDetailService } from './project-detail.service';
import { CreateProjectDetailDto } from './dto/create-project-detail.dto';
import { UpdateProjectDetailDto } from './dto/update-project-detail.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';  
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';    

@ApiTags('projectDetail')
@Controller('projectDetail')
export class ProjectDetailController {
  constructor(private readonly projectDetailService: ProjectDetailService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a projectDetail' })
  create(@Body() createProjectDetailDto: CreateProjectDetailDto) {
    return this.projectDetailService.create(createProjectDetailDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all projectDetail' })
  findAll() {
    return this.projectDetailService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one projectDetail' })
  findOne(@Param('id') id: string) {
    return this.projectDetailService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a projectDetail' })
  update(@Param('id') id: string, @Body() updateProjectDetailDto: UpdateProjectDetailDto) {
    return this.projectDetailService.update(+id, updateProjectDetailDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a projectDetail' })
  remove(@Param('id') id: string) {
    return this.projectDetailService.remove(+id);
  }
}
