import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectObjectiveDto {
    @ApiProperty()
    projectId: number
    @ApiProperty()
    objective_am: string
    @ApiProperty()
    objective_en: string
    @ApiProperty()
    objective_ru: string
}
