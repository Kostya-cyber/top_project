import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { GetUsers } from './dto/get-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

export class UsersRepository {
  async createUser(body: CreateUserDto): Promise<UserEntity> {
    return UserEntity.create(body).save();
  }

  async getUserById(id: string): Promise<UserEntity> {
    return UserEntity.findOne(id);
  }

  async getUsers(query: GetUsers): Promise<UserEntity[]> {
    return UserEntity.find({ where: { ...query } });
  }

  async updateUserById(body: UpdateUserDto): Promise<void> {
    const { id, ...data } = body;
    await UserEntity.update({ id }, data);
  }

  async deleteUserById(body: DeleteUserDto): Promise<void> {
    await UserEntity.delete(body.id);
  }
}
