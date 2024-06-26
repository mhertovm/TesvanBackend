import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaqService } from './faq.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('faq')
@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @Post()
  @ApiOperation({ summary: 'Create a faq' })
  create(@Body() createFaqDto: CreateFaqDto) {
    return this.faqService.create(createFaqDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all faq' })
  findAll() {
    return this.faqService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one faq' })
  findOne(@Param('id') id: string) {
    return this.faqService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a faq' })
  update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
    return this.faqService.update(+id, updateFaqDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a faq' })
  remove(@Param('id') id: string) {
    return this.faqService.remove(+id);
  }
}
