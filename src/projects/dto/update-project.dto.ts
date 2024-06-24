import { PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
    name_am: string
    name_en: string
    name_ru: string
    metaTitle_am: string
    metaTitle_en: string
    metaTitle_ru: string
    metaDescription_am: string
    metaDescription_en: string
    metaDescription_ru: string
    image: string
    url: string
}
