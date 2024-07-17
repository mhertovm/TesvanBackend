import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApproachService } from './approach.service';
import { CreateApproachDto } from './dto/create-approach.dto';
import { UpdateApproachDto } from './dto/update-approach.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('approach')
@Controller('approach')
export class ApproachController {
  constructor(private readonly approachService: ApproachService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a approach' })
  create(@Body() createApproachDto: CreateApproachDto) {
    return this.approachService.create(createApproachDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all approach' })
  findAll(@Query('language') language: string) {
    return this.approachService.findAll(language);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one approach' })
  findOne(@Param('id') id: string, @Query('language') language: string) {
    return this.approachService.findOne(+id, language);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a approach' })
  update(
    @Param('id') id: string,
    @Body() updateApproachDto: UpdateApproachDto,
  ) {
    return this.approachService.update(+id, updateApproachDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a approach' })
  remove(@Param('id') id: string) {
    return this.approachService.remove(+id);
  }
}
