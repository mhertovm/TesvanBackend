import { Module } from '@nestjs/common';
import { ProjectObjectiveService } from './project-objective.service';
import { ProjectObjectiveController } from './project-objective.controller';

@Module({
  controllers: [ProjectObjectiveController],
  providers: [ProjectObjectiveService],
})
export class ProjectObjectiveModule {}
