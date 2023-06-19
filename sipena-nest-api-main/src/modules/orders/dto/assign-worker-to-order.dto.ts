import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AssignWorkerToOrderDto {
  @ApiProperty()
  @IsString()
  readonly userId: string;
}
