import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/core/consants';
import { FailInterface, SuccessInterface } from 'src/core/interfaces';
import { CurrentUser } from 'src/core/strategies/current-user.interface';
import { RolesService } from '../roles/roles.service';
import { UserEntity } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { LoginDto, RegisterUserDto, TokenDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private rolesService: RolesService,
  ) {}

  async validateUser(login: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByLogin(login);
    if (!user) {
      throw new NotFoundException('There is no user with such an login');
    }
    const comparePassword = user.password == password;
    if (!comparePassword) {
      throw new UnauthorizedException('Invalid password');
    }
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login({ login, password }: LoginDto) {
    const user = await this.validateUser(login, password);
    const accessToken = this._createToken(
      user,
      process.env.JWT_ACCESS_TOKEN_EXPIRESIN,
      process.env.JWT_ACCESS_SECRETKEY,
    );
    const refreshToken = this._createToken(
      user,
      process.env.JWT_REFRESH_TOKEN_EXPIRESIN,
      process.env.JWT_REFRESH_SECRETKEY,
    );
    return {
      accessToken,
      refreshToken,
    };
  }

  async registration(
    user: RegisterUserDto,
  ): Promise<FailInterface | SuccessInterface<UserEntity>> {
    const guest = await this.rolesService.getRoleByName(Role.GUEST);
    const userSave = { role: guest.id, ...user };

    try {
      const savedUser = await this.usersService.createUser(userSave);
      return { status: 'success', data: savedUser };
    } catch (err) {
      return { status: 'fail', message: err };
    }
  }

  public async refreshToken(refreshToken: string): Promise<TokenDto> {
    try {
      const user = await this.jwtService.verify<CurrentUser>(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRETKEY,
      });
      const accessToken = this._createToken(
        user,
        process.env.JWT_ACCESS_TOKEN_EXPIRESIN,
        process.env.JWT_ACCESS_SECRETKEY,
      );
      return accessToken;
    } catch (err) {
      throw new BadRequestException('refresh token is not valid');
    }
  }

  private _createToken(user: CurrentUser, expiresIn, secret: string): TokenDto {
    const { id, role } = user;
    const jwtUser = { id, role };
    const token = this.jwtService.sign(jwtUser, { expiresIn, secret });
    return {
      expiresIn,
      token,
    };
  }
}
