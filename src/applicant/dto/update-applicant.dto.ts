import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicantDto } from './create-applicant.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateApplicantDto extends PartialType(CreateApplicantDto) {
  @ApiProperty({ required: false })
  fullName: string;
  @ApiProperty({ required: false })
  email: string;
  @ApiProperty({ required: false })
  phone: string;
  @ApiProperty({ required: false })
  isAgreed: boolean;
  @ApiProperty({ required: false })
  profession: string;
  @ApiProperty({ required: false })
  level: string;
  @ApiProperty({ required: false })
  message: string;
}
