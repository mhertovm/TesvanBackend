import { PartialType } from '@nestjs/mapped-types';
import { CreateApproachDto } from './create-approach.dto';

export class UpdateApproachDto extends PartialType(CreateApproachDto) {}
