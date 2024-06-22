import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicantDto } from './create-applicant.dto';

export class UpdateApplicantDto extends PartialType(CreateApplicantDto) {
    fullName: string
    email: string
    phone: string
    isAgreed: boolean
    profession: string
    level: string
    message: string
}
