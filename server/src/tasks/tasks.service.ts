import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { prisma } from '@/prisma';

@Injectable()
export class TasksService {
  async create(createTaskDto: CreateTaskDto) {
    coneol.log('tasks.service')
    console.log('createTaskDto', createTaskDto);

    const task = await prisma.task.create({ data: createTaskDto });

    return task;
  }

  async findAll() {
    const tasks = await prisma.task.findMany();

    return tasks;
  }

  async findToday() {
    const tasks = await prisma.task.findMany({
      where: {
        AND: [
          {
            date: {
              gte: new Date(
                '2021-10-25T00:00:00+0900',
              )
            },
          },
          {
            date: {
              lte: new Date(
                '2021-10-26T00:00:00+0900',
              )
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
