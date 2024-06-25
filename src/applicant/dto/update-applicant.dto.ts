import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicantDto } from './create-applicant.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateApplicantDto extends PartialType(CreateApplicantDto) {
    @ApiProperty()
    fullName: string
    @ApiProperty()
    email: string
    @ApiProperty()
    phone: string
    @ApiProperty()
    isAgreed: boolean
    @ApiProperty()
    profession: string
    @ApiProperty()
    level: string
    @ApiProperty()
    message: string
}
