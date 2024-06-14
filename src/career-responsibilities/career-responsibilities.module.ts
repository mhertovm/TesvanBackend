import { Module } from '@nestjs/common';
import { CareerResponsibilitiesService } from './career-responsibilities.service';
import { CareerResponsibilitiesController } from './career-responsibilities.controller';

@Module({
  controllers: [CareerResponsibilitiesController],
  providers: [CareerResponsibilitiesService],
})
export class CareerResponsibilitiesModule {}
