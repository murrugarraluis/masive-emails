import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewslettersController } from '../newsletters/newsletters.controller';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  constructor(private readonly newsletterController: NewslettersController) {}
  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    this.logger.debug('Called every 10 seconds');
    await this.newsletterController.sendNewsletterToUsers();
  }
}
