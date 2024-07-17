import { PartialType } from '@nestjs/mapped-types';
import { CreateOfferDto } from './create-offer.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOfferDto extends PartialType(CreateOfferDto) {
  @ApiProperty({ required: false })
  serviceId: number;
  @ApiProperty({ required: false })
  offers_am: string;
  @ApiProperty({ required: false })
  offers_en: string;
  @ApiProperty({ required: false })
  offers_ru: string;
}
