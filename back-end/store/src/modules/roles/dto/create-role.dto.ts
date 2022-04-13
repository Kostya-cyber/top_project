import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRole {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  role: string;
}
