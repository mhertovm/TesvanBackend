import { Module } from '@nestjs/common';
import { ApproachService } from './approach.service';
import { ApproachController } from './approach.controller';

@Module({
  controllers: [ApproachController],
  providers: [ApproachService],
})
export class ApproachModule {}
