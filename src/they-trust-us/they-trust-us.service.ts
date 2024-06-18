import { Injectable } from '@nestjs/common';
import { CreateTheyTrustUsDto } from './dto/create-they-trust-us.dto';
import { UpdateTheyTrustUsDto } from './dto/update-they-trust-us.dto';

@Injectable()
export class TheyTrustUsService {
  create(createTheyTrustUsDto: CreateTheyTrustUsDto) {
    return 'This action adds a new theyTrustUs';
  }

  findAll() {
    return `This action returns all theyTrustUs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} theyTrustUs`;
  }

  update(id: number, updateTheyTrustUsDto: UpdateTheyTrustUsDto) {
    return `This action updates a #${id} theyTrustUs`;
  }

  remove(id: number) {
    return `This action removes a #${id} theyTrustUs`;
  }
}
