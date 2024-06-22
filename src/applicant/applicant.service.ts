import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ApplicantService {
  async create(createApplicantDto: CreateApplicantDto) {
    try {
      const newApplicant = await prisma.applicant.create({
        data: createApplicantDto,
      });
      return newApplicant;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const applicants = await prisma.applicant.findMany()
      return applicants;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const applicant = await prisma.applicant.findUnique({
        where: {
          id,
        },
      })
      return applicant;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateApplicantDto: UpdateApplicantDto) {
    try {
      const updateApplicant = await prisma.applicant.update({
        where: {
          id,
        },
        data: updateApplicantDto
      })
      return updateApplicant;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deleteApplicant = await prisma.applicant.delete({
        where: {
          id,
        },
      })
      return deleteApplicant;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
