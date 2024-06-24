import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('careers')
@Controller('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a careers' })
  create(@Body() createCareerDto: CreateCareerDto) {
    return this.careersService.create(createCareerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all careers' })
  findAll() {
    return this.careersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one careers' })
  findOne(@Param('id') id: string) {
    return this.careersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a careers' })
  update(@Param('id') id: string, @Body() updateCareerDto: UpdateCareerDto) {
    return this.careersService.update(+id, updateCareerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a careers' })
  remove(@Param('id') id: string) {
    return this.careersService.remove(+id);
  }
}
