import { Module } from '@nestjs/common';
import { AboutUsService } from './about-us.service';
import { AboutUsController } from './about-us.controller';

@Module({
  controllers: [AboutUsController],
  providers: [AboutUsService],
})
export class AboutUsModule {}
