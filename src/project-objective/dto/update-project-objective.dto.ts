import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectObjectiveDto } from './create-project-objective.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectObjectiveDto extends PartialType(CreateProjectObjectiveDto) {
    @ApiProperty()
    projectId: number
    @ApiProperty()
    objective_am: string
    @ApiProperty()
    objective_en: string
    @ApiProperty()
    objective_ru: string
}
