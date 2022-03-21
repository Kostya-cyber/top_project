import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'roles' })
export class RoleEntity extends BaseEntity {
  @ApiProperty({
    type: String,
  })
  @PrimaryGeneratedColumn(`uuid`)
  id: string;

  @ApiProperty({ type: String })
  @Column({
    type: 'varchar',
    name: 'role',
    nullable: false,
  })
  role: string;
}
