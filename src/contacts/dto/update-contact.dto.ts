import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateContactDto extends PartialType(CreateContactDto) {
    @ApiProperty()
    fullName: string
    @ApiProperty()
    email: string
    @ApiProperty()
    phone: string
    @ApiProperty()
    company: string
    @ApiProperty()
    description: string
    @ApiProperty()
    isAgreed: boolean
    @ApiProperty()
    createdAt: Date
}
