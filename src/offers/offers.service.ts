import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        offers: {
          offers: {
            needs: { offers_am: true, offers_en: true, offers_ru: true },
            compute(offers) {
              return offers[`offers_${language}`]
            }
          }
        }
      }
    })
  return prisma
}

@Injectable()
export class OffersService {
  async create(createOfferDto: CreateOfferDto) {
    try {
      const newOffers = await myPrisma().offers.create({
        data: createOfferDto,
      });
      return newOffers;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const offers = await myPrisma(language).offers.findMany({
        select: {
          id: true,
          serviceId: true,
          offers: true
        }
      })
      return offers;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const offer = await myPrisma(language).offers.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          serviceId: true,
          offers: true
        }
      })
      return offer;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateOfferDto: UpdateOfferDto) {
    try {
      const updateOffers = await myPrisma().offers.update({
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
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteOffers = await myPrisma().offers.delete({
        where: {
          id,
        },
      })
      return deleteOffers;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
