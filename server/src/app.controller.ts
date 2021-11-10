import { Controller, Get, Request,Body, Post, UseGuards } from '@nestjs/common';
import {LocalAuthGuard} from './auth/local-auth.guard'
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { CreateUserDto } from './users/dto/create-user.dto';

@Controller()
export class AppController {
}