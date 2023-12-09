import { CreateUserDto } from '@nestjs-microservices/shared/dto';
import { Controller, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

import { LocalUsersService } from './local-users.service';

@Controller()
export class LocalUsersController {
  constructor(private readonly localUsersService: LocalUsersService) {}

  @EventPattern('create_user')
  handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    console.log("@EventPattern('create_user')", data);
    this.localUsersService.createUser(data);
  }

  @MessagePattern('get_user')
  handleGetUser(@Payload('userId', ParseIntPipe) userId: number) {
    return this.localUsersService.getUser(userId);
  }
}
