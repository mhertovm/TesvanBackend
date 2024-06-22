import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutUsDto } from './create-about-us.dto';

export class UpdateAboutUsDto extends PartialType(CreateAboutUsDto) {
    metaTitle_am: string
    metaTitle_en: string
    metaTitle_ru: string
    metaDescription_am: string
    metaDescription_en: string
    metaDescription_ru: string
    projects: number
    freeCourse: number
    employess: number
    content_am: string
    content_en: string
    content_ru: string
}
