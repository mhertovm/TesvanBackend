import { Module } from '@nestjs/common';
import { CoreValuesService } from './core-values.service';
import { CoreValuesController } from './core-values.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [CoreValuesController],
  providers: [CoreValuesService],
})
export class CoreValuesModule {}
