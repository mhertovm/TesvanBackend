import { ApiProperty } from '@nestjs/swagger';

export class CreateApproachDto {
    @ApiProperty()
    serviceId: number;
    @ApiProperty()
    approach_am: string; 
    @ApiProperty()   
    approach_en: string; 
    @ApiProperty()   
    approach_ru: string;
}
