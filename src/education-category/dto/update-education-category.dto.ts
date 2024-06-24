import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationCategoryDto } from './create-education-category.dto';

export class UpdateEducationCategoryDto extends PartialType(CreateEducationCategoryDto) {
    educationId: number
    category_am: string
    category_en: string
    category_ru: string
}
