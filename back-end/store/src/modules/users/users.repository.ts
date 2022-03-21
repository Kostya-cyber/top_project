import { DeleteResult } from 'typeorm';
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
    return UserEntity.createQueryBuilder('users')
      .leftJoinAndSelect('users.role', 'roles')
      .where('users.id = :id', { id })
      .getOne();
  }

  async getUsers(query: GetUsers): Promise<UserEntity[]> {
    return UserEntity.createQueryBuilder('users')
      .leftJoinAndSelect('users.role', 'roles')
      .where(
        'users.first_name = :firstName AND users.last_name = :lastName AND users.login = :login',
        { query },
      )
      .getMany();
  }

  async updateUserById(body: UpdateUserDto): Promise<UserEntity[]> {
    return UserEntity.save([body] as UserEntity[]);
  }

  async deleteUserById(body: DeleteUserDto): Promise<DeleteResult> {
    return UserEntity.delete(body.id);
  }

  async findUserByLogin(login: string): Promise<UserEntity | undefined> {
    return UserEntity.createQueryBuilder('users')
      .leftJoinAndSelect('users.role', 'roles')
      .where('users.login = :login', { login })
      .getOne();
  }
}
