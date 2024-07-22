import { Injectable } from '@nestjs/common';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class TeamMemberService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        teamMember: {
          name: {
            needs: { name_am: true, name_en: true, name_ru: true },
            compute(teamMember) {
              return teamMember[`name_${language}`];
            },
          },
          position: {
            needs: { position_am: true, position_en: true, position_ru: true },
            compute(teamMember) {
              return teamMember[`position_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createTeamMemberDto: CreateTeamMemberDto) {
    const newTeamMember = await this.myPrisma().teamMember.create({
      data: createTeamMemberDto,
    });
    return newTeamMember;
  }

  async findAll(language: string) {
    const teamMember = await this.myPrisma(language).teamMember.findMany({
      select: {
        id: true,
        order: true,
        name: true,
        position: true,
        image: true,
      },
    });
    return teamMember;
  }

  async findOne(id: number, language: string) {
    const teamMember = await this.myPrisma(language).teamMember.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        order: true,
        name: true,
        position: true,
        image: true,
      },
    });
    return teamMember;
  }

  async update(id: number, updateTeamMemberDto: UpdateTeamMemberDto) {
    const updateTeamMember = await this.myPrisma().teamMember.update({
      where: {
        id,
      },
      data: updateTeamMemberDto,
    });
    return updateTeamMember;
  }

  async remove(id: number) {
    const deleteTeamMember = await this.myPrisma().teamMember.delete({
      where: {
        id,
      },
    });
    this.uploadService.deleteFile(deleteTeamMember.image);
    return deleteTeamMember;
  }
}
