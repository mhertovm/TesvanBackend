import { PartialType } from '@nestjs/mapped-types';
import { CreateApproachDto } from './create-approach.dto';

export class UpdateApproachDto extends PartialType(CreateApproachDto) {
    serviceId: number;
    approach_am: string;    
    approach_en: string;    
    approach_ru: string;
}
