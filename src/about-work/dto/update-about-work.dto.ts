import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutWorkDto } from './create-about-work.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAboutWorkDto extends PartialType(CreateAboutWorkDto) {
    @ApiProperty({ required: false })
    work_am: string
    @ApiProperty({ required: false })
    work_en: string
    @ApiProperty({ required: false })
    work_ru: string
}
