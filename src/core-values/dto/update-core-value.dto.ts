import { PartialType } from '@nestjs/mapped-types';
import { CreateCoreValueDto } from './create-core-value.dto';

export class UpdateCoreValueDto extends PartialType(CreateCoreValueDto) {
    title_am: string
    title_en: string
    title_ru: string
    description_am: string
    description_en: string
    description_ru: string
}
