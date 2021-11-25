import { Controller, UseGuards, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LabelsService } from './labels.service';
import { CreateLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@UseGuards(JwtAuthGuard)
@Controller('labels')
export class LabelsController {
  constructor(private readonly labelsService: LabelsService) {}

  @Post()
  async create(@Body() createLabelDto: CreateLabelDto) {
    console.log('create endpoint is called')
    return await this.labelsService.create(createLabelDto);
  }

  @Get()
  async findAll() {
    return await this.labelsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    console.log('id is', id)
    return await this.labelsService.findOne(id);
  }

  @Post(':id')
  async update(@Param('id') id: string, @Body() updateLabelDto: UpdateLabelDto) {
    return await this.labelsService.update(id, updateLabelDto);
  }


  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.labelsService.remove(+id);
  }
}
