import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

import { ApiProperty } from '@nestjs/swagger';
export class ExtendedJobDto extends CreateJobDto {
  @ApiProperty()
  id: number;
}

@ApiTags('jobs')
@Controller('jobs')

export class JobsController {
  constructor(private readonly jobsService: JobsService) {}
  @ApiResponse({ status: 200, type: ExtendedJobDto })
  @Post()
  @ApiOperation({ summary: 'Create a jobs' })
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.create(createJobDto);
  }

  @ApiResponse({ status: 200, type: [ExtendedJobDto] })
  @Get()
  @ApiOperation({ summary: 'Find all jobs' })
  findAll() {
    return this.jobsService.findAll();
  }

  @ApiResponse({ status: 200, type: ExtendedJobDto })
  @Get(':id')
  @ApiOperation({ summary: 'Find one jobs' })
  findOne(@Param('id') id: string) {
    return this.jobsService.findOne(+id);
  }

  @ApiResponse({ status: 200, type: ExtendedJobDto })
  @Patch(':id')
  @ApiOperation({ summary: 'Update a jobs' })
  update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
    return this.jobsService.update(+id, updateJobDto);
  }

  @ApiResponse({ status: 200, type: ExtendedJobDto })
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a jobs' })
  remove(@Param('id') id: string) {
    return this.jobsService.remove(+id);
  }
}
