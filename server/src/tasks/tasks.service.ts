import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { prisma } from '@/prisma';
import * as dayjs from 'dayjs';
// import 'dayjs/locale/es'

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
    const today = dayjs().startOf('day');
    console.log('today is', today);
    const tomorrow = dayjs().add(1, 'day').startOf('day');
    console.log('tomorrow is', tomorrow);

    const tasks = await prisma.task.findMany({
      where: {
        AND: [
          {
            date: {
              gte: today.toDate(),
            },
          },
          {
            date: {
              lt: tomorrow.toDate(),
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

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    console.log('hello');
    const { title } = updateTaskDto;
    return await prisma.task.update({
      where: { id: id },
      data: { title: title },
    });
  }

  async remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
