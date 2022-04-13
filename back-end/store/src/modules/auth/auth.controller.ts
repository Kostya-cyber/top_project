import { Body, Controller, Request, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Payload } from 'src/core/decorators/payload.decorator';
import { JwtAuthGuard } from 'src/core/guards';
import { FailInterface, SuccessInterface } from 'src/core/interfaces';
import { CurrentUser } from 'src/core/strategies/current-user.interface';
import { UserEntity } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import {
  AccessTokenDto,
  LoginDto,
  RefreshTokenDto,
  RegisterUserDto,
} from './dto';
import { LoginTokenDto } from './dto/login-token.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() body: LoginDto): Promise<LoginTokenDto> {
    return await this.authService.login(body);
  }

  @Post('/registration')
  async registration(
    @Body() body: RegisterUserDto,
  ): Promise<FailInterface | SuccessInterface<UserEntity>> {
    return await this.authService.registration(body);
  }

  @Post('/refreshToken')
  async refreshToken(@Body() body: RefreshTokenDto): Promise<AccessTokenDto> {
    const accessToken = await this.authService.refreshToken(body.refreshToken);
    return { accessToken };
  }

  @ApiBearerAuth('access-token')
  @Post('/me')
  @UseGuards(JwtAuthGuard)
  whoAmI(@Payload() user: CurrentUser) {
    return user;
  }
}
