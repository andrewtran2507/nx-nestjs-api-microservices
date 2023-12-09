import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocalModule } from '../local/local.module';

@Module({
  imports: [LocalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
