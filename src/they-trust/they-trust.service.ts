import { Injectable } from '@nestjs/common';
import { CreateTheyTrustDto } from './dto/create-they-trust.dto';
import { UpdateTheyTrustDto } from './dto/update-they-trust.dto';

@Injectable()
export class TheyTrustService {
  create(createTheyTrustDto: CreateTheyTrustDto) {
    return 'This action adds a new theyTrust';
  }

  findAll() {
    return `This action returns all theyTrust`;
  }

  findOne(id: number) {
    return `This action returns a #${id} theyTrust`;
  }

  update(id: number, updateTheyTrustDto: UpdateTheyTrustDto) {
    return `This action updates a #${id} theyTrust`;
  }

  remove(id: number) {
    return `This action removes a #${id} theyTrust`;
  }
}
