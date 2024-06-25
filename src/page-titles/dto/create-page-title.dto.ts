import { ApiProperty } from '@nestjs/swagger';

export class CreatePageTitleDto {
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
    students: number
    @ApiProperty()
    joinedOurTeam: string
    @ApiProperty()
    image: string
    @ApiProperty()
    type: string
}
