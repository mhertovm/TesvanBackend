import { PartialType } from '@nestjs/mapped-types';
import { CreateCareerDto } from './create-career.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCareerDto extends PartialType(CreateCareerDto) {
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
    url: string
    @ApiProperty({ required: false })
    term: string
    @ApiProperty({ required: false })
    type: string
    @ApiProperty({ required: false })
    location_am: string
    @ApiProperty({ required: false })
    location_en: string
    @ApiProperty({ required: false })
    location_ru: string
    @ApiProperty({ required: false })
    dueDate: string
    @ApiProperty({ required: false })
    jobDescription_am: string
    @ApiProperty({ required: false })
    jobDescription_en: string
    @ApiProperty({ required: false })
    jobDescription_ru: string
}
