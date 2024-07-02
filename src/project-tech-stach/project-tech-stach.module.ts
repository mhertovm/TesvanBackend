import { Module } from '@nestjs/common';
import { ProjectTechStachService } from './project-tech-stach.service';
import { ProjectTechStachController } from './project-tech-stach.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [ProjectTechStachController],
  providers: [ProjectTechStachService],
})
export class ProjectTechStachModule {}
