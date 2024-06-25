import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutWorkDto } from './create-about-work.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAboutWorkDto extends PartialType(CreateAboutWorkDto) {
    @ApiProperty()
    work_am: string
    @ApiProperty()
    work_en: string
    @ApiProperty()
    work_ru: string
}
