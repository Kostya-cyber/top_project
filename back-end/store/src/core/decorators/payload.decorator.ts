import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Payload = createParamDecorator(function (
  data: unknown,
  context: ExecutionContext,
): any {
  const req = context.switchToHttp().getRequest();
  return req.user;
});
