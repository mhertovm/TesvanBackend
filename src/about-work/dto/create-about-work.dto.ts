import { ApiProperty } from '@nestjs/swagger';

export class CreateAboutWorkDto {
    @ApiProperty()
    work_am: string
    @ApiProperty()
    work_en: string
    @ApiProperty()
    work_ru: string
}
