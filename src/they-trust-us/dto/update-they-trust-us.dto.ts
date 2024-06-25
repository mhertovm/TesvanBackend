import { PartialType } from '@nestjs/mapped-types';
import { CreateTheyTrustUsDto } from './create-they-trust-us.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTheyTrustUsDto extends PartialType(CreateTheyTrustUsDto) {
    @ApiProperty()
    image: string
}
