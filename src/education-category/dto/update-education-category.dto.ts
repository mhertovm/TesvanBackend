import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationCategoryDto } from './create-education-category.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEducationCategoryDto extends PartialType(CreateEducationCategoryDto) {
    @ApiProperty()
    educationId: number
    @ApiProperty()
    category_am: string
    @ApiProperty()
    category_en: string
    @ApiProperty()
    category_ru: string
}
