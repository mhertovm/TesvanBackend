import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectTechStachDto {
    @ApiProperty()
    projectId: number
    @ApiProperty()
    name: string
    @ApiProperty()
    image: string
}
