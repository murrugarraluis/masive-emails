import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Newsletter } from './entities/newsletter.entity';
import { NewslettersController } from './newsletters.controller';
import { NewslettersService } from './newsletters.service';
import { UsersModule } from '../users/users.module';
import { MailsModule } from '../mails/mails.module';

@Module({
  imports: [TypeOrmModule.forFeature([Newsletter]), UsersModule, MailsModule],
  controllers: [NewslettersController],
  providers: [NewslettersService],
})
export class NewslettersModule {}
