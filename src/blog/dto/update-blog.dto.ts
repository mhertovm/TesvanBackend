import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogDto } from './create-blog.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {
    @ApiProperty({ required: false })
    metaTitle_am: string
    @ApiProperty({ required: false })
    metaTitle_en?: string
    @ApiProperty({ required: false })
    metaTitle_ru: string
    @ApiProperty({ required: false })
    metaDescription_am: string
    @ApiProperty({ required: false })
    metaDescription_en: string
    @ApiProperty({ required: false })
    metaDescription_ru: string
    @ApiProperty({ type: 'string', format: 'binary', description: 'File to upload', required: false })
    image: string
    @ApiProperty({ required: false })
    duration_am: string
    @ApiProperty({ required: false })
    duration_en: string
    @ApiProperty({ required: false })
    duration_ru: string
    @ApiProperty({ required: false })
    content_am: string
    @ApiProperty({ required: false })
    content_en: string
    @ApiProperty({ required: false })
    content_ru: string
    @ApiProperty({ required: false })
    url: string
    @ApiProperty({ type: 'string', format: 'binary', description: 'File to upload', required: false })
    bigImage: string
    @ApiProperty({ required: false })
    altText: string
}
