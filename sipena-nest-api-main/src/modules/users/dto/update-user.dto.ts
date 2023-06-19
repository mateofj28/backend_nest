import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsOptional()
  readonly role: 'admin' | 'customer' | 'worker';

  @ApiProperty()
  @IsOptional()
  readonly blocked: boolean;
}
