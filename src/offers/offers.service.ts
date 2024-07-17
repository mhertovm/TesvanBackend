import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OffersService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        offers: {
          offers: {
            needs: { offers_am: true, offers_en: true, offers_ru: true },
            compute(offers) {
              return offers[`offers_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createOfferDto: CreateOfferDto) {
    try {
      const newOffers = this.myPrisma().offers.create({
        data: createOfferDto,
      });
      return newOffers;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(language: string) {
    try {
      const offers = this.myPrisma(language).offers.findMany({
        select: {
          id: true,
          serviceId: true,
          offers: true,
        },
      });
      return offers;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number, language: string) {
    try {
      const offer = this.myPrisma(language).offers.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          serviceId: true,
          offers: true,
        },
      });
      return offer;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateOfferDto: UpdateOfferDto) {
    try {
      const updateOffers = this.myPrisma().offers.update({
        where: {
          id,
        },
        data: updateOfferDto,
      });
      return updateOffers;
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
      const deleteOffers = this.myPrisma().offers.delete({
        where: {
          id,
        },
      });
      return deleteOffers;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
