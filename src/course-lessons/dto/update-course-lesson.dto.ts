import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseLessonDto } from './create-course-lesson.dto';

export class UpdateCourseLessonDto extends PartialType(CreateCourseLessonDto) {}
