import { PartialType } from '@nestjs/mapped-types';
import { CreateFaqDto } from './create-faq.dto';

export class UpdateFaqDto extends PartialType(CreateFaqDto) {
    serviceId: number
    question_am: string
    question_en: string
    question_ru: string
    answer_am: string
    answer_en: string
    answer_ru: string
}
