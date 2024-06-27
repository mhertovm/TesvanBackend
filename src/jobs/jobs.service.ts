import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class JobsService {
  async create(createJobDto: CreateJobDto) {
    try {
      const newJobs = await prisma.jobs.create({
        data: createJobDto,
      });
      return newJobs;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const jobs = await prisma.jobs.findMany()
      return jobs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const job = await prisma.jobs.findUnique({
        where: {
          id,
        },
      })
      return job;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updateJobDto: UpdateJobDto) {
    try {
      const updateJobs = await prisma.jobs.update({
        where: {
          id,
        },
        data: updateJobDto
      })
      return updateJobs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteJobs = await prisma.jobs.delete({
        where: {
          id,
        },
      })
      return deleteJobs;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
