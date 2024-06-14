import { Module } from '@nestjs/common';
import { CourseResultsService } from './course-results.service';
import { CourseResultsController } from './course-results.controller';

@Module({
  controllers: [CourseResultsController],
  providers: [CourseResultsService],
})
export class CourseResultsModule {}
