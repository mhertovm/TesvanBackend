import { PartialType } from '@nestjs/mapped-types';
import { CreateJobDto } from './create-job.dto';

export class UpdateJobDto extends PartialType(CreateJobDto) {
    fullName: string
    email: string
    phone: string
    jobRole: string
    coverLetter: string
    image: string
    isAgreed: string
    createdAt: Date
}
