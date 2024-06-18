import { Module } from '@nestjs/common';
import { TheyTrustUsService } from './they-trust-us.service';
import { TheyTrustUsController } from './they-trust-us.controller';

@Module({
  controllers: [TheyTrustUsController],
  providers: [TheyTrustUsService],
})
export class TheyTrustUsModule {}
