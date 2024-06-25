import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationDto } from './create-education.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEducationDto extends PartialType(CreateEducationDto) {
    @ApiProperty()
    type_am: string
    @ApiProperty()
    type_en: string
    @ApiProperty()
    type_ru: string
    @ApiProperty()
    education_am: string
    @ApiProperty()
    education_en: string
    @ApiProperty()
    education_ru: string
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
    image: string
    @ApiProperty()
    url: string
    @ApiProperty()
    content_am: string
    @ApiProperty()
    content_en: string
    @ApiProperty()
    content_ru: string
}
