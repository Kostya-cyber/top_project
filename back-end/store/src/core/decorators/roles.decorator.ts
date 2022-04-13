import { SetMetadata } from '@nestjs/common';
import { Role } from '../consants/role.constant';

export const Roles = (...roles: Role[]) => {
  return SetMetadata('roles', roles);
};
