import { Injectable } from '@nestjs/common';
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
    const newPrivacyPolicy = await this.myPrisma().privacyPolicy.create({
      data: createPrivacyPolicyDto,
    });
    return newPrivacyPolicy;
  }

  async findOne(language: string) {
    const privacyPolicy = await this.myPrisma(language).privacyPolicy.findFirst(
      {
        select: {
          id: true,
          metaTitle: true,
          metaDescription: true,
          content: true,
        },
      },
    );
    return privacyPolicy;
  }

  async update(id: number, updatePrivacyPolicyDto: UpdatePrivacyPolicyDto) {
    const updatePrivacyPolicy = await this.myPrisma().privacyPolicy.update({
      where: {
        id,
      },
      data: updatePrivacyPolicyDto,
    });
    return updatePrivacyPolicy;
  }

  async remove(id: number) {
    const deletePrivacyPolicy = await this.myPrisma().privacyPolicy.delete({
      where: {
        id,
      },
    });
    return deletePrivacyPolicy;
  }
}
