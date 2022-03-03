import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @ApiProperty({
    type: String,
  })
  @PrimaryGeneratedColumn(`uuid`)
  id: string;

  @ApiProperty({
    type: String,
  })
  @Column({
    type: 'varchar',
    name: 'username',
    nullable: false,
  })
  username: string;

  @ApiProperty({
    type: String,
  })
  @Column({
    type: 'varchar',
    name: 'login',
    nullable: false,
    unique: true,
  })
  login: string;

  @ApiProperty({
    type: String,
  })
  @Column({
    type: 'varchar',
    name: 'password',
    nullable: false,
  })
  password: string;
}
