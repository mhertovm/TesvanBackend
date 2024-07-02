import { Module } from '@nestjs/common';
import { EducationCategoryService } from './education-category.service';
import { EducationCategoryController } from './education-category.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [EducationCategoryController],
  providers: [EducationCategoryService],
})
export class EducationCategoryModule {}
