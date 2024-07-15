import { Module } from '@nestjs/common';
import { StudentsReviewService } from './students-review.service';
import { StudentsReviewController } from './students-review.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  imports: [AuthModule, UploadModule],
  controllers: [StudentsReviewController],
  providers: [StudentsReviewService],
})
export class StudentsReviewModule {}
