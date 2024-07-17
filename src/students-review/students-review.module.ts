import { Module } from '@nestjs/common';
import { StudentsReviewService } from './students-review.service';
import { StudentsReviewController } from './students-review.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UploadModule } from 'src/upload/upload.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AuthModule, UploadModule, PrismaModule],
  controllers: [StudentsReviewController],
  providers: [StudentsReviewService],
})
export class StudentsReviewModule {}
