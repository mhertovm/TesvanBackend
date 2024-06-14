import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TheyTrustService } from './they-trust.service';
import { CreateTheyTrustDto } from './dto/create-they-trust.dto';
import { UpdateTheyTrustDto } from './dto/update-they-trust.dto';

@Controller('they-trust')
export class TheyTrustController {
  constructor(private readonly theyTrustService: TheyTrustService) {}

  @Post()
  create(@Body() createTheyTrustDto: CreateTheyTrustDto) {
    return this.theyTrustService.create(createTheyTrustDto);
  }

  @Get()
  findAll() {
    return this.theyTrustService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.theyTrustService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTheyTrustDto: UpdateTheyTrustDto) {
    return this.theyTrustService.update(+id, updateTheyTrustDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.theyTrustService.remove(+id);
  }
}
