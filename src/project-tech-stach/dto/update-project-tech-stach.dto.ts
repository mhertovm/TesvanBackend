import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectTechStachDto } from './create-project-tech-stach.dto';

export class UpdateProjectTechStachDto extends PartialType(CreateProjectTechStachDto) {}
