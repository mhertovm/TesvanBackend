import { PartialType } from '@nestjs/mapped-types';
import { CreateCareerQualificationDto } from './create-career-qualification.dto';

export class UpdateCareerQualificationDto extends PartialType(CreateCareerQualificationDto) {}
