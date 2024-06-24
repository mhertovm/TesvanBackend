import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectCategoryDto } from './create-project-category.dto';

export class UpdateProjectCategoryDto extends PartialType(CreateProjectCategoryDto) {
    projectId: number
    category_am: string
    category_en: string
    category_ru: string
}
