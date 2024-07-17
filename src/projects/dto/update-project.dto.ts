import { PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @ApiProperty({ required: false })
  projectCategoryId: number;
  @ApiProperty({ required: false })
  name: string;
  @ApiProperty({ required: false })
  metaTitle_am: string;
  @ApiProperty({ required: false })
  metaTitle_en: string;
  @ApiProperty({ required: false })
  metaTitle_ru: string;
  @ApiProperty({ required: false })
  metaDescription_am: string;
  @ApiProperty({ required: false })
  metaDescription_en: string;
  @ApiProperty({ required: false })
  metaDescription_ru: string;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'File to upload',
    required: false,
  })
  image: string;
  @ApiProperty()
  url: string;
}
