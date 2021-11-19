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
    // TODO: 親タスクだけ持ってきたい （条件: parentTaskIdが存在しない場合、という条件文を追加する）
    // ref: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#where
    const tasks = await prisma.task.findMany({
      where : {
        parentTaskId: null
      }});

    return tasks;
  }

  async findToday() {
    const today = dayjs().startOf('day');
    console.log('today is', today);
    const tomorrow = dayjs().add(1, 'day').startOf('day');
    console.log('tomorrow is', tomorrow);
    console.log('GET, tasks/today')

    // TODO: 親タスクだけ持ってきたい （条件: parentTaskIdが存在しない場合、という条件文を追加する）
    // ref: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#where
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
        parentTaskId: null,
      },
      select: {
        id: true,
        title: true,
        date: true,
        point: true,
        status: true,
        parentTaskId: true,
        parentTask: true,
        subTasks: true,
      }
    });

    return tasks;
  }

  async findOne(id: string) {
    const task = await prisma.task.findUnique({ where: { id } });
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const { title, point } = updateTaskDto;
    return await prisma.task.update({
      where: { id },
      data: { title, point },
    });
  }

  async remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
