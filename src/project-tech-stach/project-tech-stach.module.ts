import { Module } from '@nestjs/common';
import { ProjectTechStachService } from './project-tech-stach.service';
import { ProjectTechStachController } from './project-tech-stach.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UploadModule } from 'src/upload/upload.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AuthModule, UploadModule, PrismaModule],
  controllers: [ProjectTechStachController],
  providers: [ProjectTechStachService],
})
export class ProjectTechStachModule {}
