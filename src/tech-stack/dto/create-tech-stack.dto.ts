import { ApiProperty } from '@nestjs/swagger';

export class CreateTechStackDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    image: string
}
