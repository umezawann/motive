import { Injectable } from '@nestjs/common';
import { prisma } from '@/prisma';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  async findMe(token: string): Promise<User | undefined> {
    // const user = await prisma.user.findUnique({ where: { username } });
    const user = null
    return user
  }

  async findOne(username: string): Promise<User | undefined> {
    const user = await prisma.user.findUnique({ where: { username } });

    return user
  }
}
