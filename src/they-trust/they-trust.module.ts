import { Module } from '@nestjs/common';
import { TheyTrustService } from './they-trust.service';
import { TheyTrustController } from './they-trust.controller';

@Module({
  controllers: [TheyTrustController],
  providers: [TheyTrustService],
})
export class TheyTrustModule {}
