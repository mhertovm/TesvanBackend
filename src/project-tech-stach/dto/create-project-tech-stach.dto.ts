import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectTechStachDto {
    @ApiProperty()
    projectName: string
    @ApiProperty()
    techStackId: number
}
