import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
  @ApiProperty({ required: false })
  type_am: string;
  @ApiProperty({ required: false })
  type_en: string;
  @ApiProperty({ required: false })
  type_ru: string;
  @ApiProperty({ required: false })
  service_am: string;
  @ApiProperty({ required: false })
  service_en: string;
  @ApiProperty({ required: false })
  service_ru: string;
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
  @ApiProperty({ required: false })
  url: string;
  @ApiProperty({ required: false })
  altText: string;
}
