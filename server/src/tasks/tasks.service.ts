import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { prisma } from '@/prisma';

@Injectable()
export class TasksService {
  async create(createTaskDto: CreateTaskDto) {
    console.log('createTaskDto', createTaskDto);

    const task = await prisma.task.create({ data: createTaskDto });

    return task;
  }

  async findAll() {
    const tasks = await prisma.task.findMany();

    return tasks;
  }

  async findToday() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let today = `${year}-${month}-${day} ${hours}:${minutes}`;
    let tomorrow = `${year}-${month}-${day + 1} ${hours}:${minutes}`;
    console.log('today', today);
    console.log('tomorrow', tomorrow);
    const tasks = await prisma.task.findMany({
      where: {
        AND: [
          {
            date: {
              gte: today,
            },
          },
          {
            date: {
              lte: tomorrow,
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
