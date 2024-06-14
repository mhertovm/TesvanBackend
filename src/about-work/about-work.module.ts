import { Module } from '@nestjs/common';
import { AboutWorkService } from './about-work.service';
import { AboutWorkController } from './about-work.controller';

@Module({
  controllers: [AboutWorkController],
  providers: [AboutWorkService],
})
export class AboutWorkModule {}
