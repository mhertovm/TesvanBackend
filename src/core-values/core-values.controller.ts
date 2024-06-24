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
  create(@Body() createCoreValueDto: CreateCoreValueDto) {
    return this.coreValuesService.create(createCoreValueDto);
  }

  @Get()
  findAll() {
    return this.coreValuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coreValuesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoreValueDto: UpdateCoreValueDto) {
    return this.coreValuesService.update(+id, updateCoreValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coreValuesService.remove(+id);
  }
}
