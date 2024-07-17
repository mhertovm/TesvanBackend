import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectTechStachDto {
  @ApiProperty()
  projectId: number;
  @ApiProperty()
  name: string;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'File to upload',
  })
  image: string;
}
