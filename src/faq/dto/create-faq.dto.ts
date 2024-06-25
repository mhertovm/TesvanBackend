import { ApiProperty } from '@nestjs/swagger';

export class CreateFaqDto {
    @ApiProperty()
    serviceId: number
    @ApiProperty()
    question_am: string
    @ApiProperty()
    question_en: string
    @ApiProperty()
    question_ru: string
    @ApiProperty()
    answer_am: string
    @ApiProperty()
    answer_en: string
    @ApiProperty()
    answer_ru: string
}
