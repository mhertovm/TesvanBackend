import { PartialType } from '@nestjs/mapped-types';
import { CreateHireUsDto } from './create-hire-us.dto';

export class UpdateHireUsDto extends PartialType(CreateHireUsDto) {}
