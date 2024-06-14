import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDetailDto } from './create-project-detail.dto';

export class UpdateProjectDetailDto extends PartialType(CreateProjectDetailDto) {}
