import { PartialType } from '@nestjs/mapped-types';
import { CreatePageTitleDto } from './create-page-title.dto';

export class UpdatePageTitleDto extends PartialType(CreatePageTitleDto) {}
