import { Module } from '@nestjs/common';
import { CourseLessonsService } from './course-lessons.service';
import { CourseLessonsController } from './course-lessons.controller';

@Module({
  controllers: [CourseLessonsController],
  providers: [CourseLessonsService],
})
export class CourseLessonsModule {}
