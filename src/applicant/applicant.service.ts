import { Injectable } from '@nestjs/common';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApplicantService {
  constructor(private prisma: PrismaService) {}
  async create(createApplicantDto: CreateApplicantDto) {
    const newApplicant = await this.prisma.applicant.create({
      data: createApplicantDto,
    });
    return newApplicant;
  }

  async findAll() {
    const applicants = await this.prisma.applicant.findMany();
    return applicants;
  }

  async findOne(id: number) {
    const applicant = await this.prisma.applicant.findUnique({
      where: {
        id,
      },
    });
    return applicant;
  }

  async update(id: number, updateApplicantDto: UpdateApplicantDto) {
    const updateApplicant = await this.prisma.applicant.update({
      where: {
        id,
      },
      data: updateApplicantDto,
    });
    return updateApplicant;
  }

  async remove(id: number) {
    const deleteApplicant = await this.prisma.applicant.delete({
      where: {
        id,
      },
    });
    return deleteApplicant;
  }
}
