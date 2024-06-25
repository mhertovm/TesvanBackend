import { PartialType } from '@nestjs/mapped-types';
import { CreateJobDto } from './create-job.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateJobDto extends PartialType(CreateJobDto) {
    @ApiProperty()
    fullName: string
    @ApiProperty()
    email: string
    @ApiProperty()
    phone: string
    @ApiProperty()
    jobRole: string
    @ApiProperty()
    coverLetter: string
    @ApiProperty()
    image: string
    @ApiProperty()
    isAgreed: string
    @ApiProperty()
    createdAt: Date
}
