import { Injectable } from '@nestjs/common';
import { CreatePageTitleDto } from './dto/create-page-title.dto';
import { UpdatePageTitleDto } from './dto/update-page-title.dto';

@Injectable()
export class PageTitlesService {
  create(createPageTitleDto: CreatePageTitleDto) {
    return 'This action adds a new pageTitle';
  }

  findAll() {
    return `This action returns all pageTitles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pageTitle`;
  }

  update(id: number, updatePageTitleDto: UpdatePageTitleDto) {
    return `This action updates a #${id} pageTitle`;
  }

  remove(id: number) {
    return `This action removes a #${id} pageTitle`;
  }
}
