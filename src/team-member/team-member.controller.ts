import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, UseInterceptors } from '@nestjs/common';
import { TeamMemberService } from './team-member.service';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UploadService } from 'src/upload/upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('teamMember')
@Controller('teamMember')
export class TeamMemberController {
  constructor(private readonly teamMemberService: TeamMemberService, private readonly uploadService: UploadService) { }

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a teamMember' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() createTeamMemberDto: CreateTeamMemberDto, file: Express.Multer.File) {
    createTeamMemberDto.image = this.uploadService.uploadFile(file).filename
    return this.teamMemberService.create(createTeamMemberDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all teamMember' })
  findAll(@Query('language') language: string) {
    return this.teamMemberService.findAll(language);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one teamMember' })
  findOne(@Param('id') id: string, @Query('language') language: string) {
    return this.teamMemberService.findOne(+id, language);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a teamMember' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  update(@Param('id') id: string, @Body() updateTeamMemberDto: UpdateTeamMemberDto, file: Express.Multer.File) {
    if (file) {
      updateTeamMemberDto.image = this.uploadService.uploadFile(file).filename
    }
    return this.teamMemberService.update(+id, updateTeamMemberDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a teamMember' })
  remove(@Param('id') id: string) {
    return this.teamMemberService.remove(+id);
  }
}
