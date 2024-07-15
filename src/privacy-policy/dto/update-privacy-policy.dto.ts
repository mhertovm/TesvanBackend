import { PartialType } from '@nestjs/mapped-types';
import { CreatePrivacyPolicyDto } from './create-privacy-policy.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePrivacyPolicyDto extends PartialType(CreatePrivacyPolicyDto) {
    @ApiProperty({ required: false })
    metaTitle_am: string
    @ApiProperty({ required: false })
    metaTitle_en: string
    @ApiProperty({ required: false })
    metaTitle_ru: string
    @ApiProperty({ required: false })
    metaDescription_am: string
    @ApiProperty({ required: false })
    metaDescription_en: string
    @ApiProperty({ required: false })
    metaDescription_ru: string
    @ApiProperty({ required: false })
    content_am: string 
    @ApiProperty({ required: false })
    content_en: string 
    @ApiProperty({ required: false })
    content_ru: string 
}
