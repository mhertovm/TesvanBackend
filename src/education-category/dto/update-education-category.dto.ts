import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationCategoryDto } from './create-education-category.dto';

export class UpdateEducationCategoryDto extends PartialType(CreateEducationCategoryDto) {}
