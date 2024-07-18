import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTheyTrustUsDto } from './dto/create-they-trust-us.dto';
import { UpdateTheyTrustUsDto } from './dto/update-they-trust-us.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TheyTrustUsService {
  constructor(private prisma: PrismaService) {}
  async create(createTheyTrustUsDto: CreateTheyTrustUsDto) {
    try {
      const newTheyTrustUs = await this.prisma.theyTrustUs.create({
        data: createTheyTrustUsDto,
      });
      return newTheyTrustUs;
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
      const theyTrustUs = await this.prisma.theyTrustUs.findMany();
      return theyTrustUs;
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
      const theyTrustUs = await this.prisma.theyTrustUs.findUnique({
        where: {
          id,
        },
      });
      return theyTrustUs;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateTheyTrustUsDto: UpdateTheyTrustUsDto) {
    try {
      const updateTheyTrustUs = await this.prisma.theyTrustUs.update({
        where: {
          id,
        },
        data: updateTheyTrustUsDto,
      });
      return updateTheyTrustUs;
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
      const deleteTheyTrustUs = await this.prisma.theyTrustUs.delete({
        where: {
          id,
        },
      });
      return deleteTheyTrustUs;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
