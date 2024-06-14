import { Injectable } from '@nestjs/common';
import { CreatePrivacyPolicyDto } from './dto/create-privacy-policy.dto';
import { UpdatePrivacyPolicyDto } from './dto/update-privacy-policy.dto';

@Injectable()
export class PrivacyPolicyService {
  create(createPrivacyPolicyDto: CreatePrivacyPolicyDto) {
    return 'This action adds a new privacyPolicy';
  }

  findAll() {
    return `This action returns all privacyPolicy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} privacyPolicy`;
  }

  update(id: number, updatePrivacyPolicyDto: UpdatePrivacyPolicyDto) {
    return `This action updates a #${id} privacyPolicy`;
  }

  remove(id: number) {
    return `This action removes a #${id} privacyPolicy`;
  }
}
