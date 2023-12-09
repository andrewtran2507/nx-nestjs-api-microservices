import { MakePaymentDto } from '@nestjs-microservices/shared/dto';
import { Controller, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { LocalService } from './local.service';

@Controller()
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  @EventPattern('process_payment')
  handleProcessPayment(@Payload(ValidationPipe) data: MakePaymentDto) {
    this.localService.processPayment(data);
  }
}
