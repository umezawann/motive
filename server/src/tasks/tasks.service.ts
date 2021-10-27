import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { prisma } from '@/prisma';

@Injectable()
export class TasksService {
  async create(createTaskDto: CreateTaskDto) {
    console.log('tasks.service');
    console.log('createTaskDto', createTaskDto);

    const task = await prisma.task.create({ data: createTaskDto });

    return task;
  }

  async findAll() {
    const tasks = await prisma.task.findMany();

    return tasks;
  }

  async findToday() {
    console.log('first');
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let today = `${year}-${month}-${day}`;
    let start = `${today} 00:00`;
    let deadline = `${today} 23:59`;
    console.log('start', start);
    console.log('deadline', deadline);
    const tasks = await prisma.task.findMany({
      where: {
        AND: [
          {
            date: {
              gte: new Date(start),
            },
          },
          {
            date: {
              lte: new Date(deadline),
            },
          },
        ],
      },
    });

    return tasks;
  }

  async findOne(id: string) {
    const task = await prisma.task.findUnique({ where: { id } });
    return task;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
