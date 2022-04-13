import { DeleteResult } from 'typeorm';
import { CreateRole } from './dto/create-role.dto';
import { UpdateRole } from './dto/update.role.dto';
import { RoleEntity } from './entities/role.entity';

export class RolesRepository {
  async createRole(body: CreateRole): Promise<RoleEntity> {
    return RoleEntity.create(body).save();
  }

  async getRoleById(role: string): Promise<RoleEntity> {
    return RoleEntity.findOne(role);
  }

  async getRoleByName(role: string): Promise<RoleEntity> {
    return RoleEntity.findOne({ role });
  }

  async updateRoleById(body: UpdateRole): Promise<RoleEntity> {
    return RoleEntity.save(body as RoleEntity);
  }

  async deleteRoleById(id: string): Promise<DeleteResult> {
    return RoleEntity.delete(id);
  }
}
