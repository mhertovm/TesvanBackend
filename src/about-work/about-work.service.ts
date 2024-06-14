import { Injectable } from '@nestjs/common';
import { CreateAboutWorkDto } from './dto/create-about-work.dto';
import { UpdateAboutWorkDto } from './dto/update-about-work.dto';

@Injectable()
export class AboutWorkService {
  create(createAboutWorkDto: CreateAboutWorkDto) {
    return 'This action adds a new aboutWork';
  }

  findAll() {
    return `This action returns all aboutWork`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aboutWork`;
  }

  update(id: number, updateAboutWorkDto: UpdateAboutWorkDto) {
    return `This action updates a #${id} aboutWork`;
  }

  remove(id: number) {
    return `This action removes a #${id} aboutWork`;
  }
}
