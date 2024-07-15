import { PartialType } from '@nestjs/mapped-types';
import { CreateCoreValueDto } from './create-core-value.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCoreValueDto extends PartialType(CreateCoreValueDto) {
    @ApiProperty({ required: false })
    title_am: string
    @ApiProperty({ required: false })
    title_en: string
    @ApiProperty({ required: false })
    title_ru: string
    @ApiProperty({ required: false })
    description_am: string
    @ApiProperty({ required: false })
    description_en: string
    @ApiProperty({ required: false })
    description_ru: string
}
