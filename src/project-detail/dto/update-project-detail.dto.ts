import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDetailDto } from './create-project-detail.dto';

export class UpdateProjectDetailDto extends PartialType(CreateProjectDetailDto) {
    projectId: number
    industry_am: string
    industry_en: string
    industry_ru: string
    location_am: string
    location_en: string
    location_ru: string
    duration_am: string
    duration_en: string
    duration_ru: string
    team_am: string
    team_en: string
    team_ru: string
    overview_am: string
    overview_en: string
    overview_ru: string
    challenge_am: string
    challenge_en: string
    challenge_ru: string
    solution_am: string
    solution_en: string
    solution_ru: string
    result_am: string
    result_en: string
    result_ru: string
    image: string
}
