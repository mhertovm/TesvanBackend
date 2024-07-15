import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  imports: [AuthModule, UploadModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
