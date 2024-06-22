import { PartialType } from '@nestjs/mapped-types';
import { CreateBenefitDto } from './create-benefit.dto';

export class UpdateBenefitDto extends PartialType(CreateBenefitDto) {
    serviceId: number
    title_am: string
    title_en: string
    title_ru: string
    description_am: string
    description_en: string
    description_ru: string
}
