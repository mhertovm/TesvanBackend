import { Module } from '@nestjs/common';
import { PageTitlesService } from './page-titles.service';
import { PageTitlesController } from './page-titles.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UploadModule } from 'src/upload/upload.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AuthModule, UploadModule, PrismaModule],
  controllers: [PageTitlesController],
  providers: [PageTitlesService],
})
export class PageTitlesModule {}
