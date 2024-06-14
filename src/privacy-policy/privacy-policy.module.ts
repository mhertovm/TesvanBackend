import { Module } from '@nestjs/common';
import { PrivacyPolicyService } from './privacy-policy.service';
import { PrivacyPolicyController } from './privacy-policy.controller';

@Module({
  controllers: [PrivacyPolicyController],
  providers: [PrivacyPolicyService],
})
export class PrivacyPolicyModule {}
