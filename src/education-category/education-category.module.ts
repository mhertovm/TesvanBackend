import { Module } from '@nestjs/common';
import { EducationCategoryService } from './education-category.service';
import { EducationCategoryController } from './education-category.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [EducationCategoryController],
  providers: [EducationCategoryService],
})
export class EducationCategoryModule {}
