import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactDto) {
    fullName: string
    email: string
    phone: string
    company: string
    description: string
    isAgreed: boolean
    createdAt: Date
}
