import { PartialType } from '@nestjs/mapped-types';
import { CreatePrivacyPolicyDto } from './create-privacy-policy.dto';

export class UpdatePrivacyPolicyDto extends PartialType(CreatePrivacyPolicyDto) {}
