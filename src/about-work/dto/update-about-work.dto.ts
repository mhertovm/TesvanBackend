import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutWorkDto } from './create-about-work.dto';

export class UpdateAboutWorkDto extends PartialType(CreateAboutWorkDto) {}
