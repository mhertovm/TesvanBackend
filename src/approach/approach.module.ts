import { Module } from '@nestjs/common';
import { ApproachService } from './approach.service';
import { ApproachController } from './approach.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [ApproachController],
  providers: [ApproachService],
})
export class ApproachModule {}
