import { PartialType } from '@nestjs/mapped-types';
import { CreateHireUsDto } from './create-hire-us.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateHireUsDto extends PartialType(CreateHireUsDto) {
  @ApiProperty({ required: false })
  hire_am: string;
  @ApiProperty({ required: false })
  hire_en: string;
  @ApiProperty({ required: false })
  hire_ru: string;
}
