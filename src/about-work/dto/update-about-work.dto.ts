import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutWorkDto } from './create-about-work.dto';

export class UpdateAboutWorkDto extends PartialType(CreateAboutWorkDto) {
    work_am: string
    work_en: string
    work_ru: string
}
