import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        teamMember: {
          name: {
            needs: { name_am: true, name_en: true, name_ru: true },
            compute(teamMember) {
              return teamMember[`name_${language}`]
            }
          },
          position: {
            needs: { position_am: true, position_en: true, position_ru: true },
            compute(teamMember) {
              return teamMember[`position_${language}`]
            }
          }
        }
      }
    })
  return prisma
}

@Injectable()
export class TeamMemberService {
  async create(createTeamMemberDto: CreateTeamMemberDto) {
    try {
      const newTeamMember = await myPrisma().teamMember.create({
        data: createTeamMemberDto,
      });
      return newTeamMember;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const teamMember = await myPrisma(language).teamMember.findMany({
        select: {
          id: true,
          order: true,
          name: true,
          position: true,
          image: true
        }
      })
      return teamMember;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const teamMember = await myPrisma(language).teamMember.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          order: true,
          name: true,
          position: true,
          image: true
        }
      })
      return teamMember;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateTeamMemberDto: UpdateTeamMemberDto) {
    try {
      const updateTeamMember = await myPrisma().teamMember.update({
        where: {
          id,
        },
        data: updateTeamMemberDto
      })
      return updateTeamMember;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteTeamMember = await myPrisma().teamMember.delete({
        where: {
          id,
        },
      })
      return deleteTeamMember;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
