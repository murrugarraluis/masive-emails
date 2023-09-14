import { Module } from '@nestjs/common';
import { FakerService } from './faker.service';
import { FakerController } from './faker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Newsletter } from "../newsletters/entities/newsletter.entity";
import { UserNewsletter } from "../users/entities/user-newsletter.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User,Newsletter,UserNewsletter])],
  controllers: [FakerController],
  providers: [FakerService],
})
export class FakerModule {}
