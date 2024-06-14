import { Module } from '@nestjs/common';
import { TechStackService } from './tech-stack.service';
import { TechStackController } from './tech-stack.controller';

@Module({
  controllers: [TechStackController],
  providers: [TechStackService],
})
export class TechStackModule {}
