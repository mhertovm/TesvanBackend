import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectTechStachDto } from './create-project-tech-stach.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectTechStachDto extends PartialType(CreateProjectTechStachDto) {
    @ApiProperty()
    projectId: number
    @ApiProperty()
    name: string
    @ApiProperty()
    image: string
}
