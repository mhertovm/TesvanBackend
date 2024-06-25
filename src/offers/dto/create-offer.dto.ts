import { ApiProperty } from '@nestjs/swagger';

export class CreateOfferDto {
    @ApiProperty()
    serviceId: number
    @ApiProperty()
    offers_am: string
    @ApiProperty()
    offers_en: string
    @ApiProperty()
    offers_ru: string
}
