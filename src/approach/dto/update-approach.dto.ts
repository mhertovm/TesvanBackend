import { PartialType } from '@nestjs/mapped-types';
import { CreateApproachDto } from './create-approach.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateApproachDto extends PartialType(CreateApproachDto) {
    @ApiProperty()
    serviceId: number;
    @ApiProperty()
    approach_am: string; 
    @ApiProperty()   
    approach_en: string; 
    @ApiProperty()   
    approach_ru: string;
}
