import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService, private uploadService: UploadService) {}
  async create(createJobDto: CreateJobDto) {
    try {
      const newJobs = await this.prisma.jobs.create({
        data: createJobDto,
      });
      return newJobs;
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
      const jobs = await this.prisma.jobs.findMany();
      return jobs;
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
      const job = await this.prisma.jobs.findUnique({
        where: {
          id,
        },
      });
      return job;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateJobDto: UpdateJobDto) {
    try {
      const updateJobs = await this.prisma.jobs.update({
        where: {
          id,
        },
        data: updateJobDto,
      });
      return updateJobs;
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
      const deleteJobs = await this.prisma.jobs.delete({
        where: {
          id,
        },
      });
      this.uploadService.deleteFile(deleteJobs.image)
      return deleteJobs;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
