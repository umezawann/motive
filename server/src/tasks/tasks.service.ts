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
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    let dates = [today, tomorrow].map((date) => {
      const d = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      return d;
    });

    let start = `${dates[0]} 00:00`;
    let deadline = `${dates[1]} 00:00`;
    console.log('start is', start);
    console.log('deadline is', deadline);

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
              lt: new Date(deadline),
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
