import { PartialType } from '@nestjs/mapped-types';
import { CreatePrivacyPolicyDto } from './create-privacy-policy.dto';

export class UpdatePrivacyPolicyDto extends PartialType(CreatePrivacyPolicyDto) {
    metaTitle_am: string
    metaTitle_en: string
    metaTitle_ru: string
    metaDescription_am: string
    metaDescription_en: string
    metaDescription_ru: string
    content_am: string 
    content_en: string 
    content_ru: string 
}
