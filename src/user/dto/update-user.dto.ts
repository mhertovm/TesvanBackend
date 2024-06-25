import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    name: string
    @ApiProperty()
    surname: string
    @ApiProperty()
    email: string
    @ApiProperty()
    username: string
    @ApiProperty()
    password: string
}
