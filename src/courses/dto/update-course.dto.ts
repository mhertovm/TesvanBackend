import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    metaTitle_ru: string
    metaDescription_am: string
    metaDescription_en: string
    metaDescription_ru: string
    url: string
    start: Date
    duration_am: string
    duration_en: string
    duration_ru: string
    price_am: string
    price_en: string
    price_ru: string
    deadline: Date
    description_am: string
    description_en: string
    description_ru: string
    level_am: string
    level_en: string
    level_ru: string
    type_am: string
    type_en: string
    type_ru: string
    days_am: string
    days_en: string
    days_ru: string
    lessonTime_am: string
    lessonTime_en: string
    lessonTime_ru: string
    courseDescription_am: string
    courseDescription_en: string
    courseDescription_ru: string
    image: string
    altText: string
}
