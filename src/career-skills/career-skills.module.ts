import { Module } from '@nestjs/common';
import { CareerSkillsService } from './career-skills.service';
import { CareerSkillsController } from './career-skills.controller';

@Module({
  controllers: [CareerSkillsController],
  providers: [CareerSkillsService],
})
export class CareerSkillsModule {}
