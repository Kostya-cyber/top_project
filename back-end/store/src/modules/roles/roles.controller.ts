import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard, RolesGuard } from 'src/core/guards';
import { FailInterface, SuccessInterface } from 'src/core/interfaces';
import { DeleteResult } from 'typeorm';
import { CreateRole } from './dto/create-role.dto';
import { UpdateRole } from './dto/update.role.dto';
import { RoleEntity } from './entities/role.entity';
import { RolesService } from './roles.service';

@Controller('roles')
@ApiTags('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiBearerAuth('access-token')
  @Post('/createRole')
  @ApiOkResponse({ type: RoleEntity })
  async createRole(@Body() body: CreateRole): Promise<RoleEntity> {
    return await this.rolesService.createRole(body);
  }

  @ApiBearerAuth('access-token')
  @Get('/getById')
  @ApiOkResponse({ type: RoleEntity })
  async getRoleById(@Query('id') id: string): Promise<RoleEntity> {
    return await this.rolesService.getRoleById(id);
  }

  @ApiBearerAuth('access-token')
  @Patch('/updateById')
  @ApiOkResponse({ type: RoleEntity })
  async updateRoleById(@Body() body: UpdateRole): Promise<RoleEntity> {
    return await this.rolesService.updateRoleById(body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth('access-token')
  @Delete('/deleteById')
  @ApiBadRequestResponse({ type: FailInterface })
  async deleteRoleById(
    @Query('id') id: string,
  ): Promise<FailInterface | SuccessInterface<DeleteResult>> {
    const deleteResult = await this.rolesService.deleteRoleById(id);
    if (!deleteResult.affected) {
      return { status: 'fail', message: 'role with this id was not found' };
    } else {
      return { status: 'success', data: deleteResult };
    }
  }
}
