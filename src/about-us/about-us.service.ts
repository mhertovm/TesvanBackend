import { Injectable } from '@nestjs/common';
import { CreateAboutUsDto } from './dto/create-about-us.dto';
import { UpdateAboutUsDto } from './dto/update-about-us.dto';

@Injectable()
export class AboutUsService {
  create(createAboutUsDto: CreateAboutUsDto) {
    return 'This action adds a new aboutUs';
  }

  findAll() {
    return `This action returns all aboutUs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aboutUs`;
  }

  update(id: number, updateAboutUsDto: UpdateAboutUsDto) {
    return `This action updates a #${id} aboutUs`;
  }

  remove(id: number) {
    return `This action removes a #${id} aboutUs`;
  }
}
