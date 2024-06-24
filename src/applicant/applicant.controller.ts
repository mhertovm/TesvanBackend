import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('applicant')
@Controller('applicant')
export class ApplicantController {
  constructor(private readonly applicantService: ApplicantService) {}

  @Post()
  @ApiOperation({ summary: 'Create a applicant' }) 
  create(@Body() createApplicantDto: CreateApplicantDto) {
    return this.applicantService.create(createApplicantDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all applicant' })
  findAll() {
    return this.applicantService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one applicant' })
  findOne(@Param('id') id: string) {
    return this.applicantService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a applicant' })
  update(@Param('id') id: string, @Body() updateApplicantDto: UpdateApplicantDto) {
    return this.applicantService.update(+id, updateApplicantDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a applicant' })
  remove(@Param('id') id: string) {
    return this.applicantService.remove(+id);
  }
}
