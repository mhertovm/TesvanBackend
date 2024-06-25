import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
    @ApiProperty()
    type_am: string
    @ApiProperty()
    type_en: string
    @ApiProperty()
    type_ru: string
    @ApiProperty()
    service_am: string
    @ApiProperty()
    service_en: string
    @ApiProperty()
    service_ru: string
    @ApiProperty()
    metaTitle_am: string
    @ApiProperty()
    metaTitle_en: string
    @ApiProperty()
    metaTitle_ru: string
    @ApiProperty()
    metaDescription_am: string
    @ApiProperty()
    metaDescription_en: string
    @ApiProperty()
    metaDescription_ru: string
    @ApiProperty()
    image: string
    @ApiProperty()
    url: string
    @ApiProperty()
    altText: string
}
