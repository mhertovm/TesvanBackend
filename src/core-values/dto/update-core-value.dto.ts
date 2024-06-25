import { PartialType } from '@nestjs/mapped-types';
import { CreateCoreValueDto } from './create-core-value.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCoreValueDto extends PartialType(CreateCoreValueDto) {
    @ApiProperty()
    title_am: string
    @ApiProperty()
    title_en: string
    @ApiProperty()
    title_ru: string
    @ApiProperty()
    description_am: string
    @ApiProperty()
    description_en: string
    @ApiProperty()
    description_ru: string
}
