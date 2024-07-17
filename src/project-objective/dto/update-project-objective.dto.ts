import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectObjectiveDto } from './create-project-objective.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectObjectiveDto extends PartialType(
  CreateProjectObjectiveDto,
) {
  @ApiProperty({ required: false })
  projectId: number;
  @ApiProperty({ required: false })
  objective_am: string;
  @ApiProperty({ required: false })
  objective_en: string;
  @ApiProperty({ required: false })
  objective_ru: string;
}
