import { ApiProperty } from '@nestjs/swagger'
export class CreateTaskDto {
  @ApiProperty()
  date?: Date

  @ApiProperty()
  title?: string

  @ApiProperty()
  status?: string

  @ApiProperty()
  point?: number
}

