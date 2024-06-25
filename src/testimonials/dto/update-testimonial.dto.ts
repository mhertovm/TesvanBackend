import { PartialType } from '@nestjs/mapped-types';
import { CreateTestimonialDto } from './create-testimonial.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTestimonialDto extends PartialType(CreateTestimonialDto) {
    @ApiProperty()
    fullName_am: string
    @ApiProperty()
    fullName_en: string
    @ApiProperty()
    fullName_ru: string
    @ApiProperty()
    info_am: string
    @ApiProperty()
    info_en: string
    @ApiProperty()
    info_ru: string
    @ApiProperty()
    review_am: string
    @ApiProperty()
    review_en: string
    @ApiProperty()
    review_ru: string
    @ApiProperty()
    image: string
}
