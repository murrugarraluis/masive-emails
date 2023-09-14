import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';

@Injectable()
export class FakerService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async seedUser() {
    const fakerUsers = [];
    for (let i = 0; i < 10000; i++) {
      fakerUsers.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
      });
    }
    await this.removeAllUsers();
    await this.userRepository.save(fakerUsers);
    console.log('Seed User Successfully');
  }
  async removeAllUsers() {
    await this.userRepository.clear();
  }
}
