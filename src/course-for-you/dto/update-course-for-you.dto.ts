import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseForYouDto } from './create-course-for-you.dto';

export class UpdateCourseForYouDto extends PartialType(CreateCourseForYouDto) {}
