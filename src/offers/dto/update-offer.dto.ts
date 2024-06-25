import { PartialType } from '@nestjs/mapped-types';
import { CreateOfferDto } from './create-offer.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOfferDto extends PartialType(CreateOfferDto) {
    @ApiProperty()
    serviceId: number
    @ApiProperty()
    offers_am: string
    @ApiProperty()
    offers_en: string
    @ApiProperty()
    offers_ru: string
}
