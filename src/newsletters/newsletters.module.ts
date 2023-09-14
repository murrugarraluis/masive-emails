import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Newsletter } from './entities/newsletter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Newsletter])],
  controllers: [],
  providers: [],
})
export class NewslettersModule {}
