import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TeamMemberService } from './team-member.service';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';   
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@ApiTags('teamMember')
@Controller('teamMember')
export class TeamMemberController {
  constructor(private readonly teamMemberService: TeamMemberService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a teamMember' })
  create(@Body() createTeamMemberDto: CreateTeamMemberDto) {
    return this.teamMemberService.create(createTeamMemberDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all teamMember' })
  findAll() {
    return this.teamMemberService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one teamMember' })
  findOne(@Param('id') id: string) {
    return this.teamMemberService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a teamMember' })
  update(@Param('id') id: string, @Body() updateTeamMemberDto: UpdateTeamMemberDto) {
    return this.teamMemberService.update(+id, updateTeamMemberDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a teamMember' })
  remove(@Param('id') id: string) {
    return this.teamMemberService.remove(+id);
  }
}
