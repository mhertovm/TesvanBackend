import { Module } from '@nestjs/common';
import { TheyTrustUsService } from './they-trust-us.service';
import { TheyTrustUsController } from './they-trust-us.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UploadModule } from 'src/upload/upload.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AuthModule, UploadModule, PrismaModule],
  controllers: [TheyTrustUsController],
  providers: [TheyTrustUsService],
})
export class TheyTrustUsModule {}
