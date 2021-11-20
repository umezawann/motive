import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { prisma } from '@/prisma';

@Injectable()
export class FavoritesService {
  async createLabelFavorite(labelId: string) {
    const labelFavorite = await prisma.labelFavorite.findFirst({
      where: {
        labelId
      }
    })

    if (labelFavorite) return labelFavorite

    const newLabelFavorite = await prisma.labelFavorite.create({
      data: {
        label: {
          connect: {
            id: labelId,
          }
        },
        favorite: {
          create: {
          }
        }
      }
    })

    return newLabelFavorite;
  }

  async findAll() {
    const favorites = await prisma.labelFavorite.findMany({
      select: {
        id: true,
        labelId: true,
        label: true,
        favorite: true,
        favoriteId: true,
      }
    })

    return favorites;
  }

  async findOne(id: number) {
    return `This action returns a #${id} favorite`;
  }

  async update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
    return `This action updates a #${id} favorite`;
  }

  async remove(id: number) {
    return `This action removes a #${id} favorite`;
  }
}
