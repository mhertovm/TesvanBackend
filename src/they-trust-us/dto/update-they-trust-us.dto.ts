import { PartialType } from '@nestjs/mapped-types';
import { CreateTheyTrustUsDto } from './create-they-trust-us.dto';

export class UpdateTheyTrustUsDto extends PartialType(CreateTheyTrustUsDto) {
    image: string
}
