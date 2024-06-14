import { PartialType } from '@nestjs/mapped-types';
import { CreateCoreValueDto } from './create-core-value.dto';

export class UpdateCoreValueDto extends PartialType(CreateCoreValueDto) {}
