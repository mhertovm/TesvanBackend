import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BenefitsService } from './benefits.service';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { UpdateBenefitDto } from './dto/update-benefit.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('benefits')
@Controller('benefits')
export class BenefitsController {
  constructor(private readonly benefitsService: BenefitsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a benefits' })
  create(@Body() createBenefitDto: CreateBenefitDto) {
    return this.benefitsService.create(createBenefitDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all benefits' })
  findAll() {
    return this.benefitsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one benefits' })
  findOne(@Param('id') id: string) {
    return this.benefitsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a benefits' })
  update(@Param('id') id: string, @Body() updateBenefitDto: UpdateBenefitDto) {
    return this.benefitsService.update(+id, updateBenefitDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a benefits' })
  remove(@Param('id') id: string) {
    return this.benefitsService.remove(+id);
  }
}
