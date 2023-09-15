import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { NewslettersModule } from '../newsletters/newsletters.module';

@Module({
  imports: [NewslettersModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
