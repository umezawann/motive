import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  // async validateUser(email: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(email);
  //   // TODO: passwordのencryption & decryptionを行う
  //   if (user && user.password === pass) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }

  async signup(user: any) {
    // TODO: signup機能を実装する
    return null
  }

  async login({ email, password }) {
    const payload = { email: email, sub: password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}