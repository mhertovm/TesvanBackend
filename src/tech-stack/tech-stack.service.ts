import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTechStackDto } from './dto/create-tech-stack.dto';
import { UpdateTechStackDto } from './dto/update-tech-stack.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class TechStackService {
  async create(createTechStackDto: CreateTechStackDto) {
    try {
      const newTechStack = await prisma.techStack.create({
        data: createTechStackDto,
      });
      return newTechStack;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const techStack = await prisma.techStack.findMany()
      return techStack;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const techStack = await prisma.techStack.findUnique({
        where: {
          id,
        },
      })
      return techStack;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateTechStackDto: UpdateTechStackDto) {
    try {
      const updateTechStack = await prisma.techStack.update({
        where: {
          id,
        },
        data: updateTechStackDto
      })
      return updateTechStack;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deleteTechStack = await prisma.techStack.delete({
        where: {
          id,
        },
      })
      return deleteTechStack;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
