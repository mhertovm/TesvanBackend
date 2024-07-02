import { Module } from '@nestjs/common';
import { TheyTrustUsService } from './they-trust-us.service';
import { TheyTrustUsController } from './they-trust-us.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [TheyTrustUsController],
  providers: [TheyTrustUsService],
})
export class TheyTrustUsModule {}
