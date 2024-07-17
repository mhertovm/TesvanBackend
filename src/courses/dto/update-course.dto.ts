import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @ApiProperty({ required: false })
  metaTitle_am: string;
  @ApiProperty({ required: false })
  metaTitle_en: string;
  @ApiProperty({ required: false })
  metaTitle_ru: string;
  @ApiProperty({ required: false })
  metaDescription_am: string;
  @ApiProperty({ required: false })
  metaDescription_en: string;
  @ApiProperty({ required: false })
  metaDescription_ru: string;
  @ApiProperty({ required: false })
  url: string;
  @ApiProperty({ required: false })
  start: Date;
  @ApiProperty({ required: false })
  duration_am: string;
  @ApiProperty({ required: false })
  duration_en: string;
  @ApiProperty({ required: false })
  duration_ru: string;
  @ApiProperty({ required: false })
  price_am: string;
  @ApiProperty({ required: false })
  price_en: string;
  @ApiProperty({ required: false })
  price_ru: string;
  @ApiProperty({ required: false })
  deadline: Date;
  @ApiProperty({ required: false })
  description_am: string;
  @ApiProperty({ required: false })
  description_en: string;
  @ApiProperty({ required: false })
  description_ru: string;
  @ApiProperty({ required: false })
  level_am: string;
  @ApiProperty({ required: false })
  level_en: string;
  @ApiProperty({ required: false })
  level_ru: string;
  @ApiProperty({ required: false })
  type_am: string;
  @ApiProperty({ required: false })
  type_en: string;
  @ApiProperty({ required: false })
  type_ru: string;
  @ApiProperty({ required: false })
  days_am: string;
  @ApiProperty({ required: false })
  days_en: string;
  @ApiProperty({ required: false })
  days_ru: string;
  @ApiProperty({ required: false })
  lessonTime_am: string;
  @ApiProperty({ required: false })
  lessonTime_en: string;
  @ApiProperty({ required: false })
  lessonTime_ru: string;
  @ApiProperty({ required: false })
  courseDescription_am: string;
  @ApiProperty({ required: false })
  courseDescription_en: string;
  @ApiProperty({ required: false })
  courseDescription_ru: string;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'File to upload',
    required: false,
  })
  image: string;
  @ApiProperty({ required: false })
  altText: string;
}
