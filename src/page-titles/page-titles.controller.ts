import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PageTitlesService } from './page-titles.service';
import { CreatePageTitleDto } from './dto/create-page-title.dto';
import { UpdatePageTitleDto } from './dto/update-page-title.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';    
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@ApiTags('pageTitles')
@Controller('pageTitles')
export class PageTitlesController {
  constructor(private readonly pageTitlesService: PageTitlesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a pageTitles' })
  create(@Body() createPageTitleDto: CreatePageTitleDto) {
    return this.pageTitlesService.create(createPageTitleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all pageTitles' })
  findAll() {
    return this.pageTitlesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one pageTitles' })
  findOne(@Param('id') id: string) {
    return this.pageTitlesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a pageTitles' })
  update(@Param('id') id: string, @Body() updatePageTitleDto: UpdatePageTitleDto) {
    return this.pageTitlesService.update(+id, updatePageTitleDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a pageTitles' })
  remove(@Param('id') id: string) {
    return this.pageTitlesService.remove(+id);
  }
}
