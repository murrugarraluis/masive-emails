import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserNewsletter } from './entities/user-newsletter.entity';
import { UsersService } from './services/users.service';
import { UserNewsletterService } from './services/user-newsletter.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserNewsletter])],
  controllers: [],
  providers: [UsersService, UserNewsletterService],
  exports: [UsersService, UserNewsletterService],
})
export class UsersModule {}
