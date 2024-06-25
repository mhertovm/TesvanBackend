import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectCategoryDto {
    @ApiProperty()
    projectId: number
    @ApiProperty()
    category_am: string
    @ApiProperty()
    category_en: string
    @ApiProperty()
    category_ru: string
}
