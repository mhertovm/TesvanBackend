import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class CompanyService {
  async create(createCompanyDto: CreateCompanyDto) {
    try {
      const newCompany = await prisma.company.create({
        data: createCompanyDto,
      });
      return newCompany;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const company = await prisma.company.findMany()
      return company;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const company = await prisma.company.findUnique({
        where: {
          id,
        },
      })
      return company;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    try {
      const updateCompany = await prisma.company.update({
        where: {
          id,
        },
        data: updateCompanyDto
      })
      return updateCompany;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deleteCompany = await prisma.company.delete({
        where: {
          id,
        },
      })
      return deleteCompany;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
