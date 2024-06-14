import { Module } from '@nestjs/common';
import { CoreValuesService } from './core-values.service';
import { CoreValuesController } from './core-values.controller';

@Module({
  controllers: [CoreValuesController],
  providers: [CoreValuesService],
})
export class CoreValuesModule {}
