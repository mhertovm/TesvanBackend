import { PartialType } from '@nestjs/mapped-types';
import { CreateHireUsDto } from './create-hire-us.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateHireUsDto extends PartialType(CreateHireUsDto) {
    @ApiProperty()
    hire_am: string
    @ApiProperty()
    hire_en: string
    @ApiProperty()
    hire_ru: string
}
