import { PartialType } from '@nestjs/mapped-types';
import { CreateTheyTrustDto } from './create-they-trust.dto';

export class UpdateTheyTrustDto extends PartialType(CreateTheyTrustDto) {}
