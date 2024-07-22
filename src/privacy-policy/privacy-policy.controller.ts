import {
  Controller,
  Get,
  Body,
  Patch,
  UseGuards,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PrivacyPolicyService } from './privacy-policy.service';
import { UpdatePrivacyPolicyDto } from './dto/update-privacy-policy.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('privacyPolicy')
@Controller('privacyPolicy')
export class PrivacyPolicyController {
  constructor(private readonly privacyPolicyService: PrivacyPolicyService) {}

  @Get()
  @ApiOperation({ summary: 'Find one privacyPolicy' })
  findOne(@Query('language') language: string) {
    try {
      return this.privacyPolicyService.findOne(language);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a privacyPolicy' })
  update(@Body() updatePrivacyPolicyDto: UpdatePrivacyPolicyDto) {
    try {
      return this.privacyPolicyService.update(updatePrivacyPolicyDto);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
