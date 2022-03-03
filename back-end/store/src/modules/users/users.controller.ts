import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { GetUsers } from './dto/get-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUser')
  @ApiResponse({ type: UserEntity })
  public async create(@Body() body: CreateUserDto): Promise<UserEntity> {
    return await this.usersService.createUser(body);
  }

  @Get('getUsers')
  @ApiResponse({ type: UserEntity })
  public async findAll(@Query() query: GetUsers): Promise<UserEntity[]> {
    return await this.usersService.getUsers(query);
  }

  @Get('getUserById')
  @ApiResponse({ type: UserEntity })
  public async findOne(@Query('id') id: string): Promise<UserEntity> {
    return await this.usersService.getUserById(id);
  }

  @Patch('updateUser')
  public async updateUserById(@Body() body: UpdateUserDto): Promise<void> {
    return await this.usersService.updateUserById(body);
  }

  @Delete('deleteUserById')
  public async remove(@Body() body: DeleteUserDto): Promise<void> {
    return await this.usersService.deleteUserById(body);
  }
}
