import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { prisma } from '@/prisma';
import * as dayjs from 'dayjs'
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
    // TODO: dayjsを使ってコードを書き換える
    // https://day.js.org/docs/en/installation/typescript
    const hoge = dayjs().toDate()
    // dayjs().add()
    console.log('hoge is', hoge)
    const today = new Date();
    const tomorrow = new Date(); // hint: dayjs().add(7, 'day'), ref: https://day.js.org/docs/en/manipulate/add#docsNav

    tomorrow.setDate(today.getDate() + 1);

    const dates = [today, tomorrow].map((date) => {
      const d = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      return d;
    });

    const start = new Date(`${dates[0]} 00:00`);
    const deadline = new Date(`${dates[1]} 00:00`);
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
