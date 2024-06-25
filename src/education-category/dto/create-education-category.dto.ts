import { ApiProperty } from '@nestjs/swagger';

export class CreateEducationCategoryDto {
    @ApiProperty()
    educationId: number
    @ApiProperty()
    category_am: string
    @ApiProperty()
    category_en: string
    @ApiProperty()
    category_ru: string
}
