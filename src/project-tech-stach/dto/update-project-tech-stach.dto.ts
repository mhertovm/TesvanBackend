import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectTechStachDto } from './create-project-tech-stach.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectTechStachDto extends PartialType(
  CreateProjectTechStachDto,
) {
  @ApiProperty({ required: false })
  projectId: number;
  @ApiProperty({ required: false })
  name: string;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'File to upload',
    required: false,
  })
  image: string;
}
