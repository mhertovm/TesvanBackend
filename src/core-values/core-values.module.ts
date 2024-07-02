import { Module } from '@nestjs/common';
import { CoreValuesService } from './core-values.service';
import { CoreValuesController } from './core-values.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [CoreValuesController],
  providers: [CoreValuesService],
})
export class CoreValuesModule {}
