import { PartialType } from '@nestjs/mapped-types';
import { CreateFaqDto } from './create-faq.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFaqDto extends PartialType(CreateFaqDto) {
  @ApiProperty({ required: false })
  serviceId: number;
  @ApiProperty({ required: false })
  question_am: string;
  @ApiProperty({ required: false })
  question_en: string;
  @ApiProperty({ required: false })
  question_ru: string;
  @ApiProperty({ required: false })
  answer_am: string;
  @ApiProperty({ required: false })
  answer_en: string;
  @ApiProperty({ required: false })
  answer_ru: string;
}
