import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectTechStachDto } from './create-project-tech-stach.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectTechStachDto extends PartialType(CreateProjectTechStachDto) {
    @ApiProperty()
    projectName: string
    @ApiProperty()
    techStackId: number
}
