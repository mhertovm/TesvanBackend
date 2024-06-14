import { Module } from '@nestjs/common';
import { CourseSyllabusService } from './course-syllabus.service';
import { CourseSyllabusController } from './course-syllabus.controller';

@Module({
  controllers: [CourseSyllabusController],
  providers: [CourseSyllabusService],
})
export class CourseSyllabusModule {}
