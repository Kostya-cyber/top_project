import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateRole {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  role: string;
}
