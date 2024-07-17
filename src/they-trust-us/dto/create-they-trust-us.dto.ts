import { ApiProperty } from '@nestjs/swagger';

export class CreateTheyTrustUsDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'File to upload',
  })
  image: string;
}
