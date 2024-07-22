import { Injectable } from '@nestjs/common';
import { CreateTheyTrustUsDto } from './dto/create-they-trust-us.dto';
import { UpdateTheyTrustUsDto } from './dto/update-they-trust-us.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class TheyTrustUsService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}
  async create(createTheyTrustUsDto: CreateTheyTrustUsDto) {
    const newTheyTrustUs = await this.prisma.theyTrustUs.create({
      data: createTheyTrustUsDto,
    });
    return newTheyTrustUs;
  }

  async findAll() {
    const theyTrustUs = await this.prisma.theyTrustUs.findMany();
    return theyTrustUs;
  }

  async findOne(id: number) {
    const theyTrustUs = await this.prisma.theyTrustUs.findUnique({
      where: {
        id,
      },
    });
    return theyTrustUs;
  }

  async update(id: number, updateTheyTrustUsDto: UpdateTheyTrustUsDto) {
    const updateTheyTrustUs = await this.prisma.theyTrustUs.update({
      where: {
        id,
      },
      data: updateTheyTrustUsDto,
    });
    return updateTheyTrustUs;
  }

  async remove(id: number) {
    const deleteTheyTrustUs = await this.prisma.theyTrustUs.delete({
      where: {
        id,
      },
    });
    this.uploadService.deleteFile(deleteTheyTrustUs.image);
    return deleteTheyTrustUs;
  }
}
