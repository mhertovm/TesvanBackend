import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class TeamMemberService {
  async create(createTeamMemberDto: CreateTeamMemberDto) {
    try {
      const newTeamMember = await prisma.teamMember.create({
        data: createTeamMemberDto,
      });
      return newTeamMember;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const teamMember = await prisma.teamMember.findMany()
      return teamMember;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const teamMember = await prisma.teamMember.findUnique({
        where: {
          id,
        },
      })
      return teamMember;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updateTeamMemberDto: UpdateTeamMemberDto) {
    try {
      const updateTeamMember = await prisma.teamMember.update({
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
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteTeamMember = await prisma.teamMember.delete({
        where: {
          id,
        },
      })
      return deleteTeamMember;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
