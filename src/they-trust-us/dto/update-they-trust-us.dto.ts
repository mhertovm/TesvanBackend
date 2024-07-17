import { PartialType } from '@nestjs/mapped-types';
import { CreateTheyTrustUsDto } from './create-they-trust-us.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTheyTrustUsDto extends PartialType(CreateTheyTrustUsDto) {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'File to upload',
    required: false,
  })
  image: string;
}
