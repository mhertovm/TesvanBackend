import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDetailDto } from './create-project-detail.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectDetailDto extends PartialType(CreateProjectDetailDto) {
    @ApiProperty({ required: false })
    projectId: number
    @ApiProperty({ required: false })
    industry_am: string
    @ApiProperty({ required: false })
    industry_en: string
    @ApiProperty({ required: false })
    industry_ru: string
    @ApiProperty({ required: false })
    location_am: string
    @ApiProperty({ required: false })
    location_en: string
    @ApiProperty({ required: false })
    location_ru: string
    @ApiProperty({ required: false })
    duration_am: string
    @ApiProperty({ required: false })
    duration_en: string
    @ApiProperty({ required: false })
    duration_ru: string
    @ApiProperty({ required: false })
    team_am: string
    @ApiProperty({ required: false })
    team_en: string
    @ApiProperty({ required: false })
    team_ru: string
    @ApiProperty({ required: false })
    overview_am: string
    @ApiProperty({ required: false })
    overview_en: string
    @ApiProperty({ required: false })
    overview_ru: string
    @ApiProperty({ required: false })
    challenge_am: string
    @ApiProperty({ required: false })
    challenge_en: string
    @ApiProperty({ required: false })
    challenge_ru: string
    @ApiProperty({ required: false })
    solution_am: string
    @ApiProperty({ required: false })
    solution_en: string
    @ApiProperty({ required: false })
    solution_ru: string
    @ApiProperty({ required: false })
    result_am: string
    @ApiProperty({ required: false })
    result_en: string
    @ApiProperty({ required: false })
    result_ru: string
    @ApiProperty({ type: 'string', format: 'binary', description: 'File to upload', required: false })
    image: string
}
