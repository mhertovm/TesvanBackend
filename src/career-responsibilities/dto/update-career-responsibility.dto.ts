import { PartialType } from '@nestjs/mapped-types';
import { CreateCareerResponsibilityDto } from './create-career-responsibility.dto';

export class UpdateCareerResponsibilityDto extends PartialType(CreateCareerResponsibilityDto) {}
