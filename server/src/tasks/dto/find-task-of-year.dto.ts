import { ApiProperty } from '@nestjs/swagger'


export class findTaskOfYearDto {
  @ApiProperty()
  year: string
} 