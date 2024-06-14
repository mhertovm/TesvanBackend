import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseOfferDto } from './create-course-offer.dto';

export class UpdateCourseOfferDto extends PartialType(CreateCourseOfferDto) {}
