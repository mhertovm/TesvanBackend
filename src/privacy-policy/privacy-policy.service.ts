import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePrivacyPolicyDto } from './dto/create-privacy-policy.dto';
import { UpdatePrivacyPolicyDto } from './dto/update-privacy-policy.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrivacyPolicyService {
  constructor(private prisma: PrismaService) {}

  myPrisma(language?: string) {
    language ? language : (language = 'en');
    return this.prisma.$extends({
      result: {
        privacyPolicy: {
          metaTitle: {
            needs: {
              metaTitle_am: true,
              metaTitle_en: true,
              metaTitle_ru: true,
            },
            compute(privacyPolicy) {
              return privacyPolicy[`metaTitle_${language}`];
            },
          },
          metaDescription: {
            needs: {
              metaDescription_am: true,
              metaDescription_en: true,
              metaDescription_ru: true,
            },
            compute(privacyPolicy) {
              return privacyPolicy[`metaDescription_${language}`];
            },
          },
          content: {
            needs: { content_am: true, content_en: true, content_ru: true },
            compute(privacyPolicy) {
              return privacyPolicy[`content_${language}`];
            },
          },
        },
      },
    });
  }
  async create(createPrivacyPolicyDto: CreatePrivacyPolicyDto) {
    try {
      const newPrivacyPolicy = this.myPrisma().privacyPolicy.create({
        data: createPrivacyPolicyDto,
      });
      return newPrivacyPolicy;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(language: string) {
    try {
      const privacyPolicy = this.myPrisma(language).privacyPolicy.findFirst({
        select: {
          id: true,
          metaTitle: true,
          metaDescription: true,
          content: true,
        },
      });
      return privacyPolicy;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updatePrivacyPolicyDto: UpdatePrivacyPolicyDto) {
    try {
      const updatePrivacyPolicy = this.myPrisma().privacyPolicy.update({
        where: {
          id,
        },
        data: updatePrivacyPolicyDto,
      });
      return updatePrivacyPolicy;
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
      const deletePrivacyPolicy = this.myPrisma().privacyPolicy.delete({
        where: {
          id,
        },
      });
      return deletePrivacyPolicy;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
