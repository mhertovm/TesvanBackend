import { Module } from '@nestjs/common';
import { StudentsReviewService } from './students-review.service';
import { StudentsReviewController } from './students-review.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [StudentsReviewController],
  providers: [StudentsReviewService],
})
export class StudentsReviewModule {}
