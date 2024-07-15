import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationDto } from './create-education.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEducationDto extends PartialType(CreateEducationDto) {
    @ApiProperty({ required: false })
    educationCategoryId: number
    @ApiProperty({ required: false })
    type_am: string
    @ApiProperty({ required: false })
    type_en: string
    @ApiProperty({ required: false })
    type_ru: string
    @ApiProperty({ required: false })
    education_am: string
    @ApiProperty({ required: false })
    education_en: string
    @ApiProperty({ required: false })
    education_ru: string
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
    @ApiProperty({ type: 'string', format: 'binary', description: 'File to upload', required: false })
    image: string
    @ApiProperty({ required: false })
    url: string
    @ApiProperty({ required: false })
    content_am: string
    @ApiProperty({ required: false })
    content_en: string
    @ApiProperty({ required: false })
    content_ru: string
}
