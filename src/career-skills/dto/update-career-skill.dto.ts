import { PartialType } from '@nestjs/mapped-types';
import { CreateCareerSkillDto } from './create-career-skill.dto';

export class UpdateCareerSkillDto extends PartialType(CreateCareerSkillDto) {}
