import { ApiProperty } from '@nestjs/swagger';

export class CreateApplicantDto {
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
