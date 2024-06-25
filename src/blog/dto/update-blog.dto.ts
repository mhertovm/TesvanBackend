import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogDto } from './create-blog.dto';
import { ApiProperty } from '@nestjs/swagger';/////////////////

export class UpdateBlogDto extends PartialType(CreateBlogDto) {
    @ApiProperty()     //////////////////
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
    duration_am: string
    @ApiProperty()
    duration_en: string
    @ApiProperty()
    duration_ru: string
    @ApiProperty()
    content_am: string
    @ApiProperty()
    content_en: string
    @ApiProperty()
    content_ru: string
    @ApiProperty()
    url: string
    @ApiProperty()
    bigImage: string
    @ApiProperty()
    altText: string
    @ApiProperty()
    createdAt: Date
}
