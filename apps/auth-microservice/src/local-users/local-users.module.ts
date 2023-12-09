import { Module } from '@nestjs/common';
import { LocalUsersController } from './local-users.controller';
import { LocalUsersService } from './local-users.service';
import { LocalUsersRepository } from './local-users.repository';

@Module({
  imports: [],
  providers: [LocalUsersService, LocalUsersRepository],
  controllers: [LocalUsersController],
})
export class LocalUsersModule {}
