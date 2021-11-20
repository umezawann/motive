import { Controller, UseGuards, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@UseGuards(JwtAuthGuard)
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post('labels/:id')
  async createLabelFavorite(@Param('id') id: string, @Body() createFavoriteDto: CreateFavoriteDto) {
    return await this.favoritesService.createLabelFavorite(id);
  }

  @Get()
  async findAll() {
    return this.favoritesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.favoritesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFavoriteDto: UpdateFavoriteDto) {
    return this.favoritesService.update(+id, updateFavoriteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.favoritesService.remove(+id);
  }
}
