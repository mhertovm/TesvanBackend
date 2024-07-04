import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

import { PrismaClient } from '@prisma/client';
function myPrisma(language?: string) {
  language ? language : language = "en";
  const prisma = new PrismaClient()
    .$extends({
      result: {
        services: {
          type: {
            needs: { type_am: true, type_en: true, type_ru: true },
            compute(services) {
              return services[`type_${language}`]
            }
          },
          service: {
            needs: { service_am: true, service_en: true, service_ru: true },
            compute(services) {
              return services[`service_${language}`]
            }
          },
          metaTitle: {
            needs: { metaTitle_am: true, metaTitle_en: true, metaTitle_ru: true },
            compute(services) {
              return services[`metaTitle_${language}`]
            }
          },
          metaDescription: {
            needs: { metaDescription_am: true, metaDescription_en: true, metaDescription_ru: true },
            compute(services) {
              return services[`metaDescription_${language}`]
            }
          }
        }
      }
    })
  return prisma
}

@Injectable()
export class ServicesService {
  async create(createServiceDto: CreateServiceDto) {
    try {
      const newServices = await myPrisma().services.create({
        data: createServiceDto,
      });
      return newServices;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findAll(language: string) {
    try {
      const services = await myPrisma(language).services.findMany({
        select: {
          id: true,
          type: true,
          service: true,
          metaTitle: true,
          metaDescription: true,
          image: true,
          url: true,
          altText: true
        }
      })
      return services;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async findOne(id: number, language: string) {
    try {
      const servic = await myPrisma(language).services.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          type: true,
          service: true,
          metaTitle: true,
          metaDescription: true,
          image: true,
          url: true,
          altText: true
        }
      })
      return servic;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    try {
      const updateServices = await myPrisma().services.update({
        where: {
          id,
        },
        data: updateServiceDto
      })
      return updateServices;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }

  async remove(id: number) {
    try {
      const deleteServices = await myPrisma().services.delete({
        where: {
          id,
        },
      })
      return deleteServices;
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await myPrisma().$disconnect();
    }
  }
}
