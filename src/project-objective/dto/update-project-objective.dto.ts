import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectObjectiveDto } from './create-project-objective.dto';

export class UpdateProjectObjectiveDto extends PartialType(CreateProjectObjectiveDto) {
    projectId: number
    objective_am: string
    objective_en: string
    objective_ru: string
}
