import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamMemberDto {
    @ApiProperty()
    order: number
    @ApiProperty()
    name_am: string
    @ApiProperty()
    name_en: string
    @ApiProperty()
    name_ru: string
    @ApiProperty()
    position_am: string
    @ApiProperty()
    position_en: string
    @ApiProperty()
    position_ru: string
    @ApiProperty()
    image: string
}
