import { Module } from '@nestjs/common';
import { ProjectObjectiveService } from './project-objective.service';
import { ProjectObjectiveController } from './project-objective.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [ProjectObjectiveController],
  providers: [ProjectObjectiveService],
})
export class ProjectObjectiveModule {}
