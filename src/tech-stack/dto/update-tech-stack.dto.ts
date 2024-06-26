import { PartialType } from '@nestjs/mapped-types';
import { CreateTechStackDto } from './create-tech-stack.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTechStackDto extends PartialType(CreateTechStackDto) {
    @ApiProperty()
    name: string
    @ApiProperty()
    image: string
}
