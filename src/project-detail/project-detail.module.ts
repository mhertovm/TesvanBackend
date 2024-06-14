import { Module } from '@nestjs/common';
import { ProjectDetailService } from './project-detail.service';
import { ProjectDetailController } from './project-detail.controller';

@Module({
  controllers: [ProjectDetailController],
  providers: [ProjectDetailService],
})
export class ProjectDetailModule {}
