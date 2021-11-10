import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { prisma } from '@/prisma';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log('validateUser', user);
    // TODO: passwordのencryption & decryptionを行う
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async signup(user: CreateUserDto) {
    const existedUser = await prisma.user.findUnique({
      where: {
        username: user.username,
      },
    });

    const payload = { username: user.username };
    const access_token = this.jwtService.sign(payload);

    if (existedUser) {
      throw new UnauthorizedException();
    }

    // TODO: encrypto/decrypto
    await prisma.user.create({
      data: {
        ...user,
      },
    });

    return { access_token };
  }

  async login(user: CreateUserDto) {
    const payload = { username: user.username };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
