import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { GetUsers } from './dto/get-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(body: CreateUserDto): Promise<UserEntity> {
    return this.usersRepository.createUser(body);
  }

  async getUsers(query: GetUsers): Promise<UserEntity[]> {
    return this.usersRepository.getUsers(query);
  }

  async getUserById(id: string): Promise<UserEntity> {
    return this.usersRepository.getUserById(id);
  }

  async updateUserById(body: UpdateUserDto): Promise<void> {
    return this.usersRepository.updateUserById(body);
  }

  async deleteUserById(body: DeleteUserDto): Promise<void> {
    return this.usersRepository.deleteUserById(body);
  }
}
