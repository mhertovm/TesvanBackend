import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}
  async create(createContactDto: CreateContactDto) {
    const newContacts = await this.prisma.contacts.create({
      data: createContactDto,
    });
    return newContacts;
  }

  async findAll() {
    const contacts = await this.prisma.contacts.findMany();
    return contacts;
  }

  async findOne(id: number) {
    const contact = await this.prisma.contacts.findUnique({
      where: {
        id,
      },
    });
    return contact;
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    const updateContacts = await this.prisma.contacts.update({
      where: {
        id,
      },
      data: updateContactDto,
    });
    return updateContacts;
  }

  async remove(id: number) {
    const deleteContacts = await this.prisma.contacts.delete({
      where: {
        id,
      },
    });
    return deleteContacts;
  }
}
