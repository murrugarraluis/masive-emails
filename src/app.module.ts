import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FakerModule } from './faker/faker.module';
import { NewslettersModule } from './newsletters/newsletters.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'massive_email',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    FakerModule,
    NewslettersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
