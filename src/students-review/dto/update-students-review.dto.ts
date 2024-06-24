import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentsReviewDto } from './create-students-review.dto';

export class UpdateStudentsReviewDto extends PartialType(CreateStudentsReviewDto) {
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
