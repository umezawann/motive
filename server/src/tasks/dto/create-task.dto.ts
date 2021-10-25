import { ApiProperty } from '@nestjs/swagger'

export enum TaskStatusEnum {
  TODO = 'TODO',
  DONE = 'DONE',
}

export class CreateTaskDto {
  @ApiProperty()
  date: Date

  @ApiProperty()
  title: string

  @ApiProperty({ enum: TaskStatusEnum, default: 'TODO', isArray: false })
  status: TaskStatusEnum

  @ApiProperty()
  point: number
}

