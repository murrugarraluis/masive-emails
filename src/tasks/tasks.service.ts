import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewslettersController } from '../newsletters/newsletters.controller';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  constructor(private readonly newsletterController: NewslettersController) {}
  @Cron(CronExpression.EVERY_5_SECONDS)
  async handleCron() {
    this.logger.debug('Called every 5 seconds');
    await this.newsletterController.sendNewsletterToUsers('17');
  }
}
