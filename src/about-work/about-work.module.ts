import { Module } from '@nestjs/common';
import { AboutWorkService } from './about-work.service';
import { AboutWorkController } from './about-work.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AboutWorkController],
  providers: [AboutWorkService],
})
export class AboutWorkModule {}
