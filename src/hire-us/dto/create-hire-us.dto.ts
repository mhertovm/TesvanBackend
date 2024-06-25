import { ApiProperty } from '@nestjs/swagger';

export class CreateHireUsDto {
    @ApiProperty()
    hire_am: string
    @ApiProperty()
    hire_en: string
    @ApiProperty()
    hire_ru: string
}
