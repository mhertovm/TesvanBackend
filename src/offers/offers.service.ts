import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class OffersService {
  async create(createOfferDto: CreateOfferDto) {
    try {
      const newOffers = await prisma.offers.create({
        data: createOfferDto,
      });
      return newOffers;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const offers = await prisma.offers.findMany()
      return offers;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const offer = await prisma.offers.findUnique({
        where: {
          id,
        },
      })
      return offer;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async update(id: number, updateOfferDto: UpdateOfferDto) {
    try {
      const updateOffers = await prisma.offers.update({
        where: {
          id,
        },
        data: updateOfferDto
      })
      return updateOffers;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteOffers = await prisma.offers.delete({
        where: {
          id,
        },
      })
      return deleteOffers;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }
}
