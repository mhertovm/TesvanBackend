import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationCategoryDto } from './create-education-category.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEducationCategoryDto extends PartialType(CreateEducationCategoryDto) {
    @ApiProperty({ required: false })
    category_am: string
    @ApiProperty({ required: false })
    category_en: string
    @ApiProperty({ required: false })
    category_ru: string
}
