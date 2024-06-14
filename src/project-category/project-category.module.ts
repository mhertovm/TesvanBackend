import { Module } from '@nestjs/common';
import { ProjectCategoryService } from './project-category.service';
import { ProjectCategoryController } from './project-category.controller';

@Module({
  controllers: [ProjectCategoryController],
  providers: [ProjectCategoryService],
})
export class ProjectCategoryModule {}
