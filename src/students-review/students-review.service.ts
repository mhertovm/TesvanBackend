import { Injectable } from '@nestjs/common';
import { CreateStudentsReviewDto } from './dto/create-students-review.dto';
import { UpdateStudentsReviewDto } from './dto/update-students-review.dto';

@Injectable()
export class StudentsReviewService {
  create(createStudentsReviewDto: CreateStudentsReviewDto) {
    return 'This action adds a new studentsReview';
  }

  findAll() {
    return `This action returns all studentsReview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentsReview`;
  }

  update(id: number, updateStudentsReviewDto: UpdateStudentsReviewDto) {
    return `This action updates a #${id} studentsReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentsReview`;
  }
}
