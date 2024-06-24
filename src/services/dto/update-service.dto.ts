import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
    type_am: string
    type_en: string
    type_ru: string
    service_am: string
    service_en: string
    service_ru: string
    metaTitle_am: string
    metaTitle_en: string
    metaTitle_ru: string
    metaDescription_am: string
    metaDescription_en: string
    metaDescription_ru: string
    image: string
    url: string
    altText: string
}
