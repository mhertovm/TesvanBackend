import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PageTitlesService } from './page-titles.service';
import { CreatePageTitleDto } from './dto/create-page-title.dto';
import { UpdatePageTitleDto } from './dto/update-page-title.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('pageTitles')
@Controller('pageTitles')
export class PageTitlesController {
  constructor(private readonly pageTitlesService: PageTitlesService) {}

  @Post()
  create(@Body() createPageTitleDto: CreatePageTitleDto) {
    return this.pageTitlesService.create(createPageTitleDto);
  }

  @Get()
  findAll() {
    return this.pageTitlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageTitlesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePageTitleDto: UpdatePageTitleDto) {
    return this.pageTitlesService.update(+id, updatePageTitleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageTitlesService.remove(+id);
  }
}
