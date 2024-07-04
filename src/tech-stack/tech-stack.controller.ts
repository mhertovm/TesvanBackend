import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { TechStackService } from './tech-stack.service';
import { CreateTechStackDto } from './dto/create-tech-stack.dto';
import { UpdateTechStackDto } from './dto/update-tech-stack.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';        

@ApiTags('techStack')
@Controller('techStack')
export class TechStackController {
  constructor(private readonly techStackService: TechStackService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a techStack' })
  create(@Body() createTechStackDto: CreateTechStackDto) {
    return this.techStackService.create(createTechStackDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all techStack' })
  findAll() {
    return this.techStackService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one techStack' })
  findOne(@Param('id') id: string) {
    return this.techStackService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a techStack' })
  update(@Param('id') id: string, @Body() updateTechStackDto: UpdateTechStackDto) {
    return this.techStackService.update(+id, updateTechStackDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a techStack' })
  remove(@Param('id') id: string) {
    return this.techStackService.remove(+id);
  }
}
