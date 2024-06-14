import { Injectable } from '@nestjs/common';
import { CreateCareerQualificationDto } from './dto/create-career-qualification.dto';
import { UpdateCareerQualificationDto } from './dto/update-career-qualification.dto';

@Injectable()
export class CareerQualificationsService {
  create(createCareerQualificationDto: CreateCareerQualificationDto) {
    return 'This action adds a new careerQualification';
  }

  findAll() {
    return `This action returns all careerQualifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} careerQualification`;
  }

  update(id: number, updateCareerQualificationDto: UpdateCareerQualificationDto) {
    return `This action updates a #${id} careerQualification`;
  }

  remove(id: number) {
    return `This action removes a #${id} careerQualification`;
  }
}
