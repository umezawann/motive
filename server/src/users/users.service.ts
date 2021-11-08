import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { prisma } from '@/prisma';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  async findOne(email: string): Promise<User | undefined> {
    const user = await prisma.user.findUnique({ where: { email } });

    return user
  }
}