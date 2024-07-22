import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class JobsService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}
  async create(createJobDto: CreateJobDto) {
    const newJobs = await this.prisma.jobs.create({
      data: createJobDto,
    });
    return newJobs;
  }

  async findAll() {
    const jobs = await this.prisma.jobs.findMany();
    return jobs;
  }

  async findOne(id: number) {
    const job = await this.prisma.jobs.findUnique({
      where: {
        id,
      },
    });
    return job;
  }

  async update(id: number, updateJobDto: UpdateJobDto) {
    const updateJobs = await this.prisma.jobs.update({
      where: {
        id,
      },
      data: updateJobDto,
    });
    return updateJobs;
  }

  async remove(id: number) {
    const deleteJobs = await this.prisma.jobs.delete({
      where: {
        id,
      },
    });
    this.uploadService.deleteFile(deleteJobs.image);
    return deleteJobs;
  }
}
