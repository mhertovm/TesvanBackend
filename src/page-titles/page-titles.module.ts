import { Module } from '@nestjs/common';
import { PageTitlesService } from './page-titles.service';
import { PageTitlesController } from './page-titles.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  imports: [AuthModule, UploadModule],
  controllers: [PageTitlesController],
  providers: [PageTitlesService],
})
export class PageTitlesModule {}
