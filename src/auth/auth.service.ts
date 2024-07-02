import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  async generateToken(loginDto: LoginDto) {

    try {
      const user = await prisma.user.findUnique({
        where: {
          username: loginDto.username
        },
      })
      if (!user) {
        return new HttpException('Invalid email or password1', HttpStatus.FORBIDDEN);
      }
      const isMatch = await bcrypt.compare(loginDto.password, user.password);

      if (!isMatch) {
        return new HttpException('Invalid email or password', HttpStatus.FORBIDDEN);
      }
      
      const payload = { username: loginDto.username }
      const access_token = this.jwtService.sign(payload)

      return { access_token };
    } catch (error) {
      console.error(error);
      throw new HttpException('something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await prisma.$disconnect();
    }
  }

  verifyToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (e) {
      return null;
    }
  }
}
