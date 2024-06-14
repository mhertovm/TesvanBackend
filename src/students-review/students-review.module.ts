import { Module } from '@nestjs/common';
import { StudentsReviewService } from './students-review.service';
import { StudentsReviewController } from './students-review.controller';

@Module({
  controllers: [StudentsReviewController],
  providers: [StudentsReviewService],
})
export class StudentsReviewModule {}
