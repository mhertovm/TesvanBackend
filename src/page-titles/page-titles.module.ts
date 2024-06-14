import { Module } from '@nestjs/common';
import { PageTitlesService } from './page-titles.service';
import { PageTitlesController } from './page-titles.controller';

@Module({
  controllers: [PageTitlesController],
  providers: [PageTitlesService],
})
export class PageTitlesModule {}
