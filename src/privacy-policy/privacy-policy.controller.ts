import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrivacyPolicyService } from './privacy-policy.service';
import { CreatePrivacyPolicyDto } from './dto/create-privacy-policy.dto';
import { UpdatePrivacyPolicyDto } from './dto/update-privacy-policy.dto';

@Controller('privacy-policy')
export class PrivacyPolicyController {
  constructor(private readonly privacyPolicyService: PrivacyPolicyService) {}

  @Post()
  create(@Body() createPrivacyPolicyDto: CreatePrivacyPolicyDto) {
    return this.privacyPolicyService.create(createPrivacyPolicyDto);
  }

  @Get()
  findAll() {
    return this.privacyPolicyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.privacyPolicyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrivacyPolicyDto: UpdatePrivacyPolicyDto) {
    return this.privacyPolicyService.update(+id, updatePrivacyPolicyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.privacyPolicyService.remove(+id);
  }
}
