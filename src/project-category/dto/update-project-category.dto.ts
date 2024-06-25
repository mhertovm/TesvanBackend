import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectCategoryDto } from './create-project-category.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectCategoryDto extends PartialType(CreateProjectCategoryDto) {
    @ApiProperty()
    projectId: number
    @ApiProperty()
    category_am: string
    @ApiProperty()
    category_en: string
    @ApiProperty()
    category_ru: string
}
