import { Injectable } from '@nestjs/common';
import { CreateApproachDto } from './dto/create-approach.dto';
import { UpdateApproachDto } from './dto/update-approach.dto';

@Injectable()
export class ApproachService {
  create(createApproachDto: CreateApproachDto) {
    return 'This action adds a new approach';
  }

  findAll() {
    return `This action returns all approach`;
  }

  findOne(id: number) {
    return `This action returns a #${id} approach`;
  }

  update(id: number, updateApproachDto: UpdateApproachDto) {
    return `This action updates a #${id} approach`;
  }

  remove(id: number) {
    return `This action removes a #${id} approach`;
  }
}
