import { ApiProperty } from '@nestjs/swagger';

export class CreateTechStackDto {
    @ApiProperty()
    name_am: string
    @ApiProperty()
    name_en: string
    @ApiProperty()
    name_ru: string
    @ApiProperty()
    image: string
}
