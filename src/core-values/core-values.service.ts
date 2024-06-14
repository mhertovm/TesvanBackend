import { Injectable } from '@nestjs/common';
import { CreateCoreValueDto } from './dto/create-core-value.dto';
import { UpdateCoreValueDto } from './dto/update-core-value.dto';

@Injectable()
export class CoreValuesService {
  create(createCoreValueDto: CreateCoreValueDto) {
    return 'This action adds a new coreValue';
  }

  findAll() {
    return `This action returns all coreValues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coreValue`;
  }

  update(id: number, updateCoreValueDto: UpdateCoreValueDto) {
    return `This action updates a #${id} coreValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} coreValue`;
  }
}
