import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationDto } from './create-education.dto';

export class UpdateEducationDto extends PartialType(CreateEducationDto) {
    type_am: string
    type_en: string
    type_ru: string
    education_am: string
    education_en: string
    education_ru: string
    metaTitle_am: string
    metaTitle_en: string
    metaTitle_ru: string
    metaDescription_am: string
    metaDescription_en: string
    metaDescription_ru: string
    image: string
    url: string
    content_am: string
    content_en: string
    content_ru: string
}
