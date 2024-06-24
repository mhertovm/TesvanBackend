import { PartialType } from '@nestjs/mapped-types';
import { CreatePageTitleDto } from './create-page-title.dto';

export class UpdatePageTitleDto extends PartialType(CreatePageTitleDto) {
    metaTitle_am: string
    metaTitle_en: string
    metaTitle_ru: string
    metaDescription_am: string
    metaDescription_en: string
    metaDescription_ru: string
    students: number
    joinedOurTeam: string
    image: string
    type: string
}
