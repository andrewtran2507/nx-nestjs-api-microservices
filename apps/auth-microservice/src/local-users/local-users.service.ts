import { CreateUserDto } from '@nestjs-microservices/shared/dto';
import { User } from '@nestjs-microservices/shared/entities';
import { Injectable } from '@nestjs/common';
import { LocalUsersRepository } from './local-users.repository';

@Injectable()
export class LocalUsersService {
  constructor(private readonly localUsersRepository: LocalUsersRepository) {}

  createUser(data: CreateUserDto): void {
    console.log('data create', data);
    this.localUsersRepository.save(data);
  }

  getUser(id: number): User {
    return this.localUsersRepository.findOne(id);
  }
}
