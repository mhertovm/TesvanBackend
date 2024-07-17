import { PartialType } from '@nestjs/mapped-types';
import { CreateBenefitDto } from './create-benefit.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBenefitDto extends PartialType(CreateBenefitDto) {
  @ApiProperty({ required: false })
  serviceId: number;
  @ApiProperty({ required: false })
  title_am: string;
  @ApiProperty({ required: false })
  title_en: string;
  @ApiProperty({ required: false })
  title_ru: string;
  @ApiProperty({ required: false })
  description_am: string;
  @ApiProperty({ required: false })
  description_en: string;
  @ApiProperty({ required: false })
  description_ru: string;
}
