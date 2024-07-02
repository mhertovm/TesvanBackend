import { Module } from '@nestjs/common';
import { HireUsService } from './hire-us.service';
import { HireUsController } from './hire-us.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [HireUsController],
  providers: [HireUsService],
})
export class HireUsModule {}
