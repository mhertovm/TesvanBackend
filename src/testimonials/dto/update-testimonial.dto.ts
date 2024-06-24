import { PartialType } from '@nestjs/mapped-types';
import { CreateTestimonialDto } from './create-testimonial.dto';

export class UpdateTestimonialDto extends PartialType(CreateTestimonialDto) {
    fullName_am: string
    fullName_en: string
    fullName_ru: string
    info_am: string
    info_en: string
    info_ru: string
    review_am: string
    review_en: string
    review_ru: string
    image: string
}
