import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetUsers {
  @ApiProperty({ type: String, required: false })
  @IsNotEmpty()
  @IsString()
  username?: string;

  @ApiProperty({ type: String, required: false })
  @IsNotEmpty()
  @IsString()
  login?: string;
}
