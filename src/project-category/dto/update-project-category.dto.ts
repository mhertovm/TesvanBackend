import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectCategoryDto } from './create-project-category.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectCategoryDto extends PartialType(
  CreateProjectCategoryDto,
) {
  @ApiProperty({ required: false })
  category_am: string;
  @ApiProperty({ required: false })
  category_en: string;
  @ApiProperty({ required: false })
  category_ru: string;
}
