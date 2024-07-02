import { Module } from '@nestjs/common';
import { PageTitlesService } from './page-titles.service';
import { PageTitlesController } from './page-titles.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [PageTitlesController],
  providers: [PageTitlesService],
})
export class PageTitlesModule {}
