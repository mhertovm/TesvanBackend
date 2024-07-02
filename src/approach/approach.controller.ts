import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApproachService } from './approach.service';
import { CreateApproachDto } from './dto/create-approach.dto';
import { UpdateApproachDto } from './dto/update-approach.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';      

@ApiTags('approach')
@Controller('approach')
export class ApproachController {
  constructor(private readonly approachService: ApproachService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a approach' })
  create(@Body() createApproachDto: CreateApproachDto) {
    return this.approachService.create(createApproachDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all approach' })
  findAll() {
    return this.approachService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one approach' })
  findOne(@Param('id') id: string) {
    return this.approachService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a approach' })
  update(@Param('id') id: string, @Body() updateApproachDto: UpdateApproachDto) {
    return this.approachService.update(+id, updateApproachDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a approach' })
  remove(@Param('id') id: string) {
    return this.approachService.remove(+id);
  }
}
