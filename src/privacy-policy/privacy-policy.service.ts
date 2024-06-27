import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePrivacyPolicyDto } from './dto/create-privacy-policy.dto';
import { UpdatePrivacyPolicyDto } from './dto/update-privacy-policy.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class PrivacyPolicyService {
  async create(createPrivacyPolicyDto: CreatePrivacyPolicyDto) {
    try {
      const newPrivacyPolicy = await prisma.privacyPolicy.create({
        data: createPrivacyPolicyDto,
      });
      return newPrivacyPolicy;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne() {
    try {
      const privacyPolicy = await prisma.privacyPolicy.findFirst()
      return privacyPolicy;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updatePrivacyPolicyDto: UpdatePrivacyPolicyDto) {
    try {
      const updatePrivacyPolicy = await prisma.privacyPolicy.update({
        where: {
          id,
        },
        data: updatePrivacyPolicyDto
      })
      return updatePrivacyPolicy;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deletePrivacyPolicy = await prisma.privacyPolicy.delete({
        where: {
          id,
        },
      })
      return deletePrivacyPolicy;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
