import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TheyTrustUsService } from './they-trust-us.service';
import { CreateTheyTrustUsDto } from './dto/create-they-trust-us.dto';
import { UpdateTheyTrustUsDto } from './dto/update-they-trust-us.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('theyTrustUs')
@Controller('theyTrustUs')
export class TheyTrustUsController {
  constructor(private readonly theyTrustUsService: TheyTrustUsService) {}

  @Post()
  create(@Body() createTheyTrustUsDto: CreateTheyTrustUsDto) {
    return this.theyTrustUsService.create(createTheyTrustUsDto);
  }

  @Get()
  findAll() {
    return this.theyTrustUsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.theyTrustUsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTheyTrustUsDto: UpdateTheyTrustUsDto) {
    return this.theyTrustUsService.update(+id, updateTheyTrustUsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.theyTrustUsService.remove(+id);
  }
}
