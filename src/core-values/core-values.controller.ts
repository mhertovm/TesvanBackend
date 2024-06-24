import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoreValuesService } from './core-values.service';
import { CreateCoreValueDto } from './dto/create-core-value.dto';
import { UpdateCoreValueDto } from './dto/update-core-value.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('coreValues')
@Controller('coreValues')
export class CoreValuesController {
  constructor(private readonly coreValuesService: CoreValuesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a coreValues' })
  create(@Body() createCoreValueDto: CreateCoreValueDto) {
    return this.coreValuesService.create(createCoreValueDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all coreValues' })
  findAll() {
    return this.coreValuesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one coreValues' })
  findOne(@Param('id') id: string) {
    return this.coreValuesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a coreValues' })
  update(@Param('id') id: string, @Body() updateCoreValueDto: UpdateCoreValueDto) {
    return this.coreValuesService.update(+id, updateCoreValueDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a coreValues' })
  remove(@Param('id') id: string) {
    return this.coreValuesService.remove(+id);
  }
}
