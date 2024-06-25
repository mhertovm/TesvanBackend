import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutUsDto } from './create-about-us.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAboutUsDto extends PartialType(CreateAboutUsDto) {
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
    projects: number 
    @ApiProperty()
    freeCourse: number 
    @ApiProperty()
    employess: number 
    @ApiProperty() 
    content_am: string 
    @ApiProperty()
    content_en: string  
    @ApiProperty()
    content_ru: string
}
