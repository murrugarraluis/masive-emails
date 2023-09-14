import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Newsletter } from '../newsletters/entities/newsletter.entity';
import { UserNewsletter } from '../users/entities/user-newsletter.entity';

@Injectable()
export class FakerService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Newsletter)
    private readonly newsletterRepository: Repository<Newsletter>,
    @InjectRepository(UserNewsletter)
    private readonly userNewsletterRepository: Repository<UserNewsletter>,
  ) {}
  async seedData() {
    await this.removeData();
    await this.insertData();
  }
  async removeData() {
    await this.removeAllUsersNewsletters();
    await this.removeAllNewsletter();
    await this.removeAllUsers();
  }
  async insertData() {
    await this.seedNewsletter();
    await this.seedUser();
    await this.associateUsersWithNewsletter();
  }

  async seedUser() {
    const fakerUsers = [];
    const COUNT_USERS = 1000;
    for (let i = 0; i < COUNT_USERS; i++) {
      fakerUsers.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
      });
    }
    // await this.removeAllUsers();
    await this.userRepository.save(fakerUsers);
    console.log('Seed User Successfully');
  }

  async seedNewsletter() {
    const fakerNewsletter = {
      title: 'Newsletter Test',
    };
    // await this.removeAllNewsletter();
    const newNewsletter = this.newsletterRepository.create(fakerNewsletter);
    await this.newsletterRepository.save(newNewsletter);
    console.log('Seed Newsletter Successfully');
  }
  async associateUsersWithNewsletter() {
    const newsletter = await this.newsletterRepository.find({ take: 1 });
    const users = await this.userRepository.find();

    const userNewsletterInserts = users.map((user) => ({
      user: user,
      newsletter: newsletter[0],
      sendEmail: false,
    }));
    // await this.removeAllUsersNewsletters();
    await this.userNewsletterRepository
      .createQueryBuilder()
      .insert()
      .into(UserNewsletter)
      .values(userNewsletterInserts)
      .execute();

    console.log('Associated Users with Newsletter Successfully');
  }
  async removeAllUsersNewsletters() {
    await this.userNewsletterRepository.delete({});
  }
  async removeAllUsers() {
    await this.userRepository.delete({});
  }

  async removeAllNewsletter() {
    await this.newsletterRepository.delete({});
  }
}
