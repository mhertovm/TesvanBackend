import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentsReviewDto } from './create-students-review.dto';

export class UpdateStudentsReviewDto extends PartialType(CreateStudentsReviewDto) {}
