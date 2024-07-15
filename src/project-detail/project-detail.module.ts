import { Module } from '@nestjs/common';
import { ProjectDetailService } from './project-detail.service';
import { ProjectDetailController } from './project-detail.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  imports: [AuthModule, UploadModule],
  controllers: [ProjectDetailController],
  providers: [ProjectDetailService],
})
export class ProjectDetailModule {}
