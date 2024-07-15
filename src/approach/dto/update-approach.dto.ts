import { PartialType } from '@nestjs/mapped-types';
import { CreateApproachDto } from './create-approach.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateApproachDto extends PartialType(CreateApproachDto) {
    @ApiProperty({ required: false })
    serviceId: number;
    @ApiProperty({ required: false })
    approach_am: string; 
    @ApiProperty({ required: false })   
    approach_en: string; 
    @ApiProperty({ required: false })   
    approach_ru: string;
}
