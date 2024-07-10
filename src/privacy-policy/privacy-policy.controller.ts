import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { PrivacyPolicyService } from './privacy-policy.service';
import { CreatePrivacyPolicyDto } from './dto/create-privacy-policy.dto';
import { UpdatePrivacyPolicyDto } from './dto/update-privacy-policy.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';   

@ApiTags('privacyPolicy')
@Controller('privacyPolicy')
export class PrivacyPolicyController {
  constructor(private readonly privacyPolicyService: PrivacyPolicyService) {}

  @Get()
  @ApiOperation({ summary: 'Find one privacyPolicy' })
  findOne(@Query('language') language: string) {
    return this.privacyPolicyService.findOne(language);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a privacyPolicy' })
  update(@Param('id') id: string, @Body() updatePrivacyPolicyDto: UpdatePrivacyPolicyDto) {
    return this.privacyPolicyService.update(+id, updatePrivacyPolicyDto);
  }
}
