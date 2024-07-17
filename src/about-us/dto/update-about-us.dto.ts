import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutUsDto } from './create-about-us.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAboutUsDto extends PartialType(CreateAboutUsDto) {
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
  projects: number;
  @ApiProperty({ required: false })
  freeCourse: number;
  @ApiProperty({ required: false })
  employess: number;
  @ApiProperty({ required: false })
  content_am: string;
  @ApiProperty({ required: false })
  content_en: string;
  @ApiProperty({ required: false })
  content_ru: string;
}
