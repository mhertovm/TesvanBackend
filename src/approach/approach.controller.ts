import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApproachService } from './approach.service';
import { CreateApproachDto } from './dto/create-approach.dto';
import { UpdateApproachDto } from './dto/update-approach.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('approach')
@Controller('approach')
export class ApproachController {
  constructor(private readonly approachService: ApproachService) {}

  @Post()
  create(@Body() createApproachDto: CreateApproachDto) {
    return this.approachService.create(createApproachDto);
  }

  @Get()
  findAll() {
    return this.approachService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.approachService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApproachDto: UpdateApproachDto) {
    return this.approachService.update(+id, updateApproachDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.approachService.remove(+id);
  }
}
