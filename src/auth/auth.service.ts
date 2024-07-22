import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async generateToken(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        username: loginDto.username,
      },
    });
    if (!user) {
      return new HttpException(
        'Invalid email or password',
        HttpStatus.FORBIDDEN,
      );
    }
    const isMatch = await bcrypt.compare(loginDto.password, user.password);

    if (!isMatch) {
      return new HttpException(
        'Invalid email or password',
        HttpStatus.FORBIDDEN,
      );
    }

    const payload = { username: loginDto.username };
    const access_token = this.jwtService.sign(payload);

    return { access_token };
  }

  verifyToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (e) {
      return null;
    }
  }
}
