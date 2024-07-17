import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamMemberService {
  constructor(private prisma: PrismaService) {}

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
    try {
      const newTeamMember = this.myPrisma().teamMember.create({
        data: createTeamMemberDto,
      });
      return newTeamMember;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(language: string) {
    try {
      const teamMember = this.myPrisma(language).teamMember.findMany({
        select: {
          id: true,
          order: true,
          name: true,
          position: true,
          image: true,
        },
      });
      return teamMember;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number, language: string) {
    try {
      const teamMember = this.myPrisma(language).teamMember.findUnique({
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
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateTeamMemberDto: UpdateTeamMemberDto) {
    try {
      const updateTeamMember = this.myPrisma().teamMember.update({
        where: {
          id,
        },
        data: updateTeamMemberDto,
      });
      return updateTeamMember;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
      const deleteTeamMember = this.myPrisma().teamMember.delete({
        where: {
          id,
        },
      });
      return deleteTeamMember;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
