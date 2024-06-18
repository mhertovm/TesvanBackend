import { Module } from '@nestjs/common';
import { EducationCategoryService } from './education-category.service';
import { EducationCategoryController } from './education-category.controller';

@Module({
  controllers: [EducationCategoryController],
  providers: [EducationCategoryService],
})
export class EducationCategoryModule {}
