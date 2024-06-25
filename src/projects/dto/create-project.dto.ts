import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
    @ApiProperty()
    name_am: string
    @ApiProperty()
    name_en: string
    @ApiProperty()
    name_ru: string
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
}
