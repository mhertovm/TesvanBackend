import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApplicantService {
  constructor(private prisma: PrismaService) {}
  async create(createApplicantDto: CreateApplicantDto) {
    try {
      const newApplicant = this.prisma.applicant.create({
        data: createApplicantDto,
      });
      return newApplicant;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const applicants = this.prisma.applicant.findMany();
      return applicants;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    try {
      const applicant = this.prisma.applicant.findUnique({
        where: {
          id,
        },
      });
      return applicant;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateApplicantDto: UpdateApplicantDto) {
    try {
      const updateApplicant = this.prisma.applicant.update({
        where: {
          id,
        },
        data: updateApplicantDto,
      });
      return updateApplicant;
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
      const deleteApplicant = this.prisma.applicant.delete({
        where: {
          id,
        },
      });
      return deleteApplicant;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
