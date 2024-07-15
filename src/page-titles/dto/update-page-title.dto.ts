import { PartialType } from '@nestjs/mapped-types';
import { CreatePageTitleDto } from './create-page-title.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePageTitleDto extends PartialType(CreatePageTitleDto) {
    @ApiProperty({ required: false })
    metaTitle_am: string
    @ApiProperty({ required: false })
    metaTitle_en: string
    @ApiProperty({ required: false })
    metaTitle_ru: string
    @ApiProperty({ required: false })
    metaDescription_am: string
    @ApiProperty({ required: false })
    metaDescription_en: string
    @ApiProperty({ required: false })
    metaDescription_ru: string
    @ApiProperty({ required: false })
    students: number
    @ApiProperty({ required: false })
    joinedOurTeam: string
    @ApiProperty({ type: 'string', format: 'binary', description: 'File to upload', required: false })
    image: string
    @ApiProperty({ required: false })
    type: string
}
