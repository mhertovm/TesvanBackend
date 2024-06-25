import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamMemberDto } from './create-team-member.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTeamMemberDto extends PartialType(CreateTeamMemberDto) {
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
