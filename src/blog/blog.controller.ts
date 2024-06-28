import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';         //////////////

@ApiTags('blog')                                                                       /////////////
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  @Post()
  @ApiOperation({ summary: 'Create a blog' })                                           //////////////
  // @ApiResponse({ status: 201, description: 'The created user', type: CreateBlogDto })   //////////////
  // @ApiBody({ type: CreateBlogDto })                                                     //////////////
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all blog' })
  findAll(@Query('language') language: string) {
    return this.blogService.findAll(language);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one blog' })
  findOne(@Param('id') id: string, @Query('language') language: string) {
    return this.blogService.findOne(+id, language);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a blog' })
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a blog' })
  remove(@Param('id') id: string) {
    return this.blogService.remove(+id);
  }
}
