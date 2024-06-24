import { PartialType } from '@nestjs/mapped-types';
import { CreateOfferDto } from './create-offer.dto';

export class UpdateOfferDto extends PartialType(CreateOfferDto) {
    serviceId: number
    offers_am: string
    offers_en: string
    offers_ru: string
}
