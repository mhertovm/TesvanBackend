import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards, Query } from '@nestjs/common';
import { BenefitsService } from './benefits.service';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { UpdateBenefitDto } from './dto/update-benefit.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger'; 
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('benefits')
@Controller('benefits')
export class BenefitsController {
  constructor(private readonly benefitsService: BenefitsService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a benefits' })
  create(@Body() createBenefitDto: CreateBenefitDto) {
    return this.benefitsService.create(createBenefitDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all benefits' })
  findAll(@Query('language') language: string) {
    return this.benefitsService.findAll(language);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one benefits' })
  findOne(@Param('id') id: string, @Query('language') language: string) {
    return this.benefitsService.findOne(+id, language);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a benefits' })
  update(@Param('id') id: string, @Body() updateBenefitDto: UpdateBenefitDto) {
    return this.benefitsService.update(+id, updateBenefitDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a benefits' })
  remove(@Param('id') id: string) {
    return this.benefitsService.remove(+id);
  }
}
