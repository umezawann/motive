import { Controller, UseGuards, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.tasksService.create(createTaskDto);
  }

  @Get()
  async findAll() {
    return this.tasksService.findAll();
  }

  @Get('today')
  async findToday() {
    return this.tasksService.findToday();
  }

  // TODO: 名前を入れる
  @Get('xxx')
  async findTasksPerYear(@Query() query: any) {
    console.log('query', query)
    return await this.tasksService.findTasksPerYear();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Post(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
