import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({
        default: 'admin'
    })
    username: string
    @ApiProperty({
        default: 'Random_password1'
    })
    password: string
}
