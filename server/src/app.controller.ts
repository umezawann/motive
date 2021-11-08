import { Body, Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import {LocalAuthGuard} from './auth/local-auth.guard'
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  // @UseGuards(JwtAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() body: any) {
    console.log('req is', req)
    console.log('body is', body)
    const {email, password} = body
    return this.authService.login({email, password});
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log('req.user is', req.user)
    return req.user;
  }
}