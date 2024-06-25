import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
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
