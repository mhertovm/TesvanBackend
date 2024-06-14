import { Module } from '@nestjs/common';
import { CourseForYouService } from './course-for-you.service';
import { CourseForYouController } from './course-for-you.controller';

@Module({
  controllers: [CourseForYouController],
  providers: [CourseForYouService],
})
export class CourseForYouModule {}
