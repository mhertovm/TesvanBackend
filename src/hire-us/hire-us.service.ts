import { Injectable } from '@nestjs/common';
import { CreateHireUsDto } from './dto/create-hire-us.dto';
import { UpdateHireUsDto } from './dto/update-hire-us.dto';

@Injectable()
export class HireUsService {
  create(createHireUsDto: CreateHireUsDto) {
    return 'This action adds a new hireUs';
  }

  findAll() {
    return `This action returns all hireUs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hireUs`;
  }

  update(id: number, updateHireUsDto: UpdateHireUsDto) {
    return `This action updates a #${id} hireUs`;
  }

  remove(id: number) {
    return `This action removes a #${id} hireUs`;
  }
}
