import { Injectable } from '@nestjs/common';
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
    const newOffers = await this.myPrisma().offers.create({
      data: createOfferDto,
    });
    return newOffers;
  }

  async findAll(language: string) {
    const offers = await this.myPrisma(language).offers.findMany({
      select: {
        id: true,
        serviceId: true,
        offers: true,
      },
    });
    return offers;
  }

  async findOne(id: number, language: string) {
    const offer = await this.myPrisma(language).offers.findUnique({
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
  }

  async update(id: number, updateOfferDto: UpdateOfferDto) {
    const updateOffers = await this.myPrisma().offers.update({
      where: {
        id,
      },
      data: updateOfferDto,
    });
    return updateOffers;
  }

  async remove(id: number) {
    const deleteOffers = await this.myPrisma().offers.delete({
      where: {
        id,
      },
    });
    return deleteOffers;
  }
}
