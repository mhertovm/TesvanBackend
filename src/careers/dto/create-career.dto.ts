import { ApiProperty } from '@nestjs/swagger';

export class CreateCareerDto {
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
    url: string
    @ApiProperty()
    term: string
    @ApiProperty()
    type: string
    @ApiProperty()
    location_am: string
    @ApiProperty()
    location_en: string
    @ApiProperty()
    location_ru: string
    @ApiProperty()
    dueDate: string
    @ApiProperty()
    jobDescription_am: string
    @ApiProperty()
    jobDescription_en: string
    @ApiProperty()
    jobDescription_ru: string
}
