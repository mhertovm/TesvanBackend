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
import { CoreValuesService } from './core-values.service';
import { CreateCoreValueDto } from './dto/create-core-value.dto';
import { UpdateCoreValueDto } from './dto/update-core-value.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('coreValues')
@Controller('coreValues')
export class CoreValuesController {
  constructor(private readonly coreValuesService: CoreValuesService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a coreValues' })
  create(@Body() createCoreValueDto: CreateCoreValueDto) {
    return this.coreValuesService.create(createCoreValueDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all coreValues' })
  findAll(@Query('language') language: string) {
    return this.coreValuesService.findAll(language);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one coreValues' })
  findOne(@Param('id') id: string, @Query('language') language: string) {
    return this.coreValuesService.findOne(+id, language);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a coreValues' })
  update(
    @Param('id') id: string,
    @Body() updateCoreValueDto: UpdateCoreValueDto,
  ) {
    return this.coreValuesService.update(+id, updateCoreValueDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a coreValues' })
  remove(@Param('id') id: string) {
    return this.coreValuesService.remove(+id);
  }
}
