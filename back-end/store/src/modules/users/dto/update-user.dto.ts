import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  login: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  password: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  username: string;
}
