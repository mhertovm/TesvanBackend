import { Module } from '@nestjs/common';
import { CourseOffersService } from './course-offers.service';
import { CourseOffersController } from './course-offers.controller';

@Module({
  controllers: [CourseOffersController],
  providers: [CourseOffersService],
})
export class CourseOffersModule {}
