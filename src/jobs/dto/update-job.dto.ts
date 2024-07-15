import { PartialType } from '@nestjs/mapped-types';
import { CreateJobDto } from './create-job.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateJobDto extends PartialType(CreateJobDto) {
    @ApiProperty({ required: false })
    fullName: string
    @ApiProperty({ required: false })
    email: string
    @ApiProperty({ required: false })
    phone: string
    @ApiProperty({ required: false })
    jobRole: string
    @ApiProperty({ required: false })
    coverLetter: string
    @ApiProperty({ type: 'string', format: 'binary', description: 'File to upload', required: false })
    image: string
    @ApiProperty({ required: false })
    isAgreed: string
}
