import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { PageTitlesService } from './page-titles.service';
import { CreatePageTitleDto } from './dto/create-page-title.dto';
import { UpdatePageTitleDto } from './dto/update-page-title.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';    
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@ApiTags('pageTitles')
@Controller('pageTitles')
export class PageTitlesController {
  constructor(private readonly pageTitlesService: PageTitlesService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a pageTitles' })
  create(@Body() createPageTitleDto: CreatePageTitleDto) {
    return this.pageTitlesService.create(createPageTitleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all pageTitles' })
  findAll(@Query('language') language: string) {
    return this.pageTitlesService.findAll(language);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one pageTitles' })
  findOne(@Param('id') id: string, @Query('language') language: string) {
    return this.pageTitlesService.findOne(+id, language);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a pageTitles' })
  update(@Param('id') id: string, @Body() updatePageTitleDto: UpdatePageTitleDto) {
    return this.pageTitlesService.update(+id, updatePageTitleDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a pageTitles' })
  remove(@Param('id') id: string) {
    return this.pageTitlesService.remove(+id);
  }
}
