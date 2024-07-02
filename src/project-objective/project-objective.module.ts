import { Module } from '@nestjs/common';
import { ProjectObjectiveService } from './project-objective.service';
import { ProjectObjectiveController } from './project-objective.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [ProjectObjectiveController],
  providers: [ProjectObjectiveService],
})
export class ProjectObjectiveModule {}
