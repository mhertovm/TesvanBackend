import { Module } from '@nestjs/common';
import { ApproachService } from './approach.service';
import { ApproachController } from './approach.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [ApproachController],
  providers: [ApproachService],
})
export class ApproachModule {}
