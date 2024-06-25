import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
    @ApiProperty()
    metaTitle_am: string
    @ApiProperty()
    metaTitle_en: string
    @ApiProperty()
    metaTitle_ru: string
    @ApiProperty()
    metaDescription_am: string
    @ApiProperty()
    metaDescription_en: string
    @ApiProperty()
    metaDescription_ru: string
    @ApiProperty()
    url: string
    @ApiProperty()
    start: Date
    @ApiProperty()
    duration_am: string
    @ApiProperty()
    duration_en: string
    @ApiProperty()
    duration_ru: string
    @ApiProperty()
    price_am: string
    @ApiProperty()
    price_en: string
    @ApiProperty()
    price_ru: string
    @ApiProperty()
    deadline: Date
    @ApiProperty()
    description_am: string
    @ApiProperty()
    description_en: string
    @ApiProperty()
    description_ru: string
    @ApiProperty()
    level_am: string
    @ApiProperty()
    level_en: string
    @ApiProperty()
    level_ru: string
    @ApiProperty()
    type_am: string
    @ApiProperty()
    type_en: string
    @ApiProperty()
    type_ru: string
    @ApiProperty()
    days_am: string
    @ApiProperty()
    days_en: string
    @ApiProperty()
    days_ru: string
    @ApiProperty()
    lessonTime_am: string
    @ApiProperty()
    lessonTime_en: string
    @ApiProperty()
    lessonTime_ru: string
    @ApiProperty()
    courseDescription_am: string
    @ApiProperty()
    courseDescription_en: string
    @ApiProperty()
    courseDescription_ru: string
    @ApiProperty()
    image: string
    @ApiProperty()
    altText: string
}
