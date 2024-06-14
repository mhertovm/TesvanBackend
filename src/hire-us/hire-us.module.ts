import { Module } from '@nestjs/common';
import { HireUsService } from './hire-us.service';
import { HireUsController } from './hire-us.controller';

@Module({
  controllers: [HireUsController],
  providers: [HireUsService],
})
export class HireUsModule {}
