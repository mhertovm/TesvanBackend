import { Injectable } from '@nestjs/common';
import { CreateCareerResponsibilityDto } from './dto/create-career-responsibility.dto';
import { UpdateCareerResponsibilityDto } from './dto/update-career-responsibility.dto';

@Injectable()
export class CareerResponsibilitiesService {
  create(createCareerResponsibilityDto: CreateCareerResponsibilityDto) {
    return 'This action adds a new careerResponsibility';
  }

  findAll() {
    return `This action returns all careerResponsibilities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} careerResponsibility`;
  }

  update(id: number, updateCareerResponsibilityDto: UpdateCareerResponsibilityDto) {
    return `This action updates a #${id} careerResponsibility`;
  }

  remove(id: number) {
    return `This action removes a #${id} careerResponsibility`;
  }
}
