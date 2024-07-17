import { Module } from '@nestjs/common';
import { HireUsService } from './hire-us.service';
import { HireUsController } from './hire-us.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [HireUsController],
  providers: [HireUsService],
})
export class HireUsModule {}
