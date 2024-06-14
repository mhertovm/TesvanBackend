import { Injectable } from '@nestjs/common';
import { CreateCareerSkillDto } from './dto/create-career-skill.dto';
import { UpdateCareerSkillDto } from './dto/update-career-skill.dto';

@Injectable()
export class CareerSkillsService {
  create(createCareerSkillDto: CreateCareerSkillDto) {
    return 'This action adds a new careerSkill';
  }

  findAll() {
    return `This action returns all careerSkills`;
  }

  findOne(id: number) {
    return `This action returns a #${id} careerSkill`;
  }

  update(id: number, updateCareerSkillDto: UpdateCareerSkillDto) {
    return `This action updates a #${id} careerSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} careerSkill`;
  }
}
