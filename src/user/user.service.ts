import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = await this.prisma.user.create({
      data: createUserDto,
    });
    return newUser;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
    return updateUser;
  }

  async remove(id: number) {
    const deleteUser = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return deleteUser;
  }
}
