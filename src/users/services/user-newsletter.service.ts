import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserNewsletter } from '../entities/user-newsletter.entity';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserNewsletterService {
  constructor(
    @InjectRepository(UserNewsletter)
    private readonly userNewsletterRepository: Repository<UserNewsletter>,
  ) {}
  async getUsersForSendNewsletter(
    newsletterId: number,
    limit: number,
  ): Promise<UserNewsletter[]> {
    const usersNewsletter = await this.userNewsletterRepository.find({
      where: {
        newsletter: {
          id: newsletterId,
        },
        sendEmail: false,
      },
      relations: ['user'],
      take: limit,
    });

    return usersNewsletter;
  }
  async updateSendEmailToTrue(
    userNewsletter: UserNewsletter,
  ): Promise<UserNewsletter | null> {
    userNewsletter.sendEmail = true;
    return this.userNewsletterRepository.save(userNewsletter);
  }
}
