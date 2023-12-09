import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocalUsersModule } from '../local-users/local-users.module';

@Module({
  imports: [LocalUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
