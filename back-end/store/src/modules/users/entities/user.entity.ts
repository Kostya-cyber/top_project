import { ApiProperty } from '@nestjs/swagger';
import { RoleEntity } from 'src/modules/roles/entities/role.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
    name: 'first_name',
    nullable: false,
  })
  firstName: string;

  @ApiProperty({
    type: String,
  })
  @Column({
    type: 'varchar',
    name: 'last_name',
    nullable: false,
  })
  lastName: string;

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

  @OneToOne(() => RoleEntity)
  @JoinColumn()
  role: string;
}
