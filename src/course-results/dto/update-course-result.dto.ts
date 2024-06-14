import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseResultDto } from './create-course-result.dto';

export class UpdateCourseResultDto extends PartialType(CreateCourseResultDto) {}
