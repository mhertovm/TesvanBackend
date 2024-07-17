import { ApiProperty } from '@nestjs/swagger';

export class CreateBlogDto {
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
  })
  image: string;

  @ApiProperty({ required: false })
  duration_am: string;

  @ApiProperty({ required: false })
  duration_en: string;

  @ApiProperty({ required: false })
  duration_ru: string;

  @ApiProperty({ required: false })
  content_am: string;

  @ApiProperty({ required: false })
  content_en: string;

  @ApiProperty({ required: false })
  content_ru: string;

  @ApiProperty()
  url: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'File to upload',
  })
  bigImage: string;

  @ApiProperty()
  altText: string;
}
