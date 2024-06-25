import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectTechStachDto {
    @ApiProperty()
    projectName_am: string
    @ApiProperty()
    projectName_en: string
    @ApiProperty()
    projectName_ru: string
    @ApiProperty()
    techStackId: number
}
