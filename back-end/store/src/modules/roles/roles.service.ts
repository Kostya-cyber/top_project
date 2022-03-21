import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateRole } from './dto/create-role.dto';
import { UpdateRole } from './dto/update.role.dto';
import { RoleEntity } from './entities/role.entity';
import { RolesRepository } from './roles.repository';

@Injectable()
export class RolesService {
  constructor(private readonly rolesRepository: RolesRepository) {}

  async createRole(body: CreateRole): Promise<RoleEntity> {
    return this.rolesRepository.createRole(body);
  }

  async getRoleById(role: string): Promise<RoleEntity> {
    return this.rolesRepository.getRoleById(role);
  }

  async getRoleByName(role: string): Promise<RoleEntity> {
    return this.rolesRepository.getRoleByName(role);
  }

  async updateRoleById(body: UpdateRole): Promise<RoleEntity> {
    return this.rolesRepository.updateRoleById(body);
  }

  async deleteRoleById(id: string): Promise<DeleteResult> {
    return this.rolesRepository.deleteRoleById(id);
  }
}
