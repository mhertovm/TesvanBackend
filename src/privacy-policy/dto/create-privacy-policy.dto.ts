import { ApiProperty } from '@nestjs/swagger';

export class CreatePrivacyPolicyDto {
    @ApiProperty()
    metaTitle_am: string
    @ApiProperty()
    metaTitle_en: string
    @ApiProperty()
    metaTitle_ru: string
    @ApiProperty()
    metaDescription_am: string
    @ApiProperty()
    metaDescription_en: string
    @ApiProperty()
    metaDescription_ru: string
    @ApiProperty()
    content_am: string 
    @ApiProperty()
    content_en: string 
    @ApiProperty()
    content_ru: string 
}
