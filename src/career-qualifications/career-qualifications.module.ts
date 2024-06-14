import { Module } from '@nestjs/common';
import { CareerQualificationsService } from './career-qualifications.service';
import { CareerQualificationsController } from './career-qualifications.controller';

@Module({
  controllers: [CareerQualificationsController],
  providers: [CareerQualificationsService],
})
export class CareerQualificationsModule {}
