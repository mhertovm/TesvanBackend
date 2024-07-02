import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PrivacyPolicyService } from './privacy-policy.service';
import { CreatePrivacyPolicyDto } from './dto/create-privacy-policy.dto';
import { UpdatePrivacyPolicyDto } from './dto/update-privacy-policy.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';   

@ApiTags('privacyPolicy')
@Controller('privacyPolicy')
export class PrivacyPolicyController {
  constructor(private readonly privacyPolicyService: PrivacyPolicyService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a privacyPolicy' })
  create(@Body() createPrivacyPolicyDto: CreatePrivacyPolicyDto) {
    return this.privacyPolicyService.create(createPrivacyPolicyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find one privacyPolicy' })
  findOne() {
    return this.privacyPolicyService.findOne();
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a privacyPolicy' })
  update(@Param('id') id: string, @Body() updatePrivacyPolicyDto: UpdatePrivacyPolicyDto) {
    return this.privacyPolicyService.update(+id, updatePrivacyPolicyDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a privacyPolicy' })
  remove(@Param('id') id: string) {
    return this.privacyPolicyService.remove(+id);
  }
}
