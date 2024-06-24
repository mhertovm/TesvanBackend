import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ContactsService {
  async create(createContactDto: CreateContactDto) {
    try {
      const newContacts = await prisma.contacts.create({
        data: createContactDto,
      });
      return newContacts;
    } catch (error) {
      console.error(error.messgae);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const contacts = await prisma.contacts.findMany()
      return contacts;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const contact = await prisma.contacts.findUnique({
        where: {
          id,
        },
      })
      return contact;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    try {
      const updateContacts = await prisma.contacts.update({
        where: {
          id,
        },
        data: updateContactDto
      })
      return updateContacts;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deleteContacts = await prisma.contacts.delete({
        where: {
          id,
        },
      })
      return deleteContacts;
    } catch (error) {
      console.error(error.message);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
