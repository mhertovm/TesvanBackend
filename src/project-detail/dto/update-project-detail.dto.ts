import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDetailDto } from './create-project-detail.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectDetailDto extends PartialType(CreateProjectDetailDto) {
    @ApiProperty()
    projectId: number
    @ApiProperty()
    industry_am: string
    @ApiProperty()
    industry_en: string
    @ApiProperty()
    industry_ru: string
    @ApiProperty()
    location_am: string
    @ApiProperty()
    location_en: string
    @ApiProperty()
    location_ru: string
    @ApiProperty()
    duration_am: string
    @ApiProperty()
    duration_en: string
    @ApiProperty()
    duration_ru: string
    @ApiProperty()
    team_am: string
    @ApiProperty()
    team_en: string
    @ApiProperty()
    team_ru: string
    @ApiProperty()
    overview_am: string
    @ApiProperty()
    overview_en: string
    @ApiProperty()
    overview_ru: string
    @ApiProperty()
    challenge_am: string
    @ApiProperty()
    challenge_en: string
    @ApiProperty()
    challenge_ru: string
    @ApiProperty()
    solution_am: string
    @ApiProperty()
    solution_en: string
    @ApiProperty()
    solution_ru: string
    @ApiProperty()
    result_am: string
    @ApiProperty()
    result_en: string
    @ApiProperty()
    result_ru: string
    @ApiProperty()
    image: string
}
