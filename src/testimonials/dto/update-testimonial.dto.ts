import { PartialType } from '@nestjs/mapped-types';
import { CreateTestimonialDto } from './create-testimonial.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTestimonialDto extends PartialType(CreateTestimonialDto) {
  @ApiProperty({ required: false })
  fullName_am: string;
  @ApiProperty({ required: false })
  fullName_en: string;
  @ApiProperty({ required: false })
  fullName_ru: string;
  @ApiProperty({ required: false })
  info_am: string;
  @ApiProperty({ required: false })
  info_en: string;
  @ApiProperty({ required: false })
  info_ru: string;
  @ApiProperty({ required: false })
  review_am: string;
  @ApiProperty({ required: false })
  review_en: string;
  @ApiProperty({ required: false })
  review_ru: string;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'File to upload',
    required: false,
  })
  image: string;
}
