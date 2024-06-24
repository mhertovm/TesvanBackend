import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamMemberDto } from './create-team-member.dto';

export class UpdateTeamMemberDto extends PartialType(CreateTeamMemberDto) {
    order: number
    name_am: string
    name_en: string
    name_ru: string
    position_am: string
    position_en: string
    position_ru: string
    image: string
}
