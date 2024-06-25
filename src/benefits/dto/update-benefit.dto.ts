import { PartialType } from '@nestjs/mapped-types';
import { CreateBenefitDto } from './create-benefit.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBenefitDto extends PartialType(CreateBenefitDto) {
    @ApiProperty()
    serviceId: number
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
