import { Module } from '@nestjs/common';
import { ProjectTechStachService } from './project-tech-stach.service';
import { ProjectTechStachController } from './project-tech-stach.controller';

@Module({
  controllers: [ProjectTechStachController],
  providers: [ProjectTechStachService],
})
export class ProjectTechStachModule {}
