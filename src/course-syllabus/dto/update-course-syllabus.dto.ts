import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseSyllabusDto } from './create-course-syllabus.dto';

export class UpdateCourseSyllabusDto extends PartialType(CreateCourseSyllabusDto) {}
