import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamMemberDto } from './create-team-member.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTeamMemberDto extends PartialType(CreateTeamMemberDto) {
    @ApiProperty({ required: false })
    order: number
    @ApiProperty({ required: false })
    name_am: string
    @ApiProperty({ required: false })
    name_en: string
    @ApiProperty({ required: false })
    name_ru: string
    @ApiProperty({ required: false })
    position_am: string
    @ApiProperty({ required: false })
    position_en: string
    @ApiProperty({ required: false })
    position_ru: string
    @ApiProperty({ type: 'string', format: 'binary', description: 'File to upload', required: false })
    image: string
}
