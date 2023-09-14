import { Get, Module } from '@nestjs/common';
import { MailsService } from './mails.service';
import { MailsController } from './mails.controller';

@Module({
  controllers: [MailsController],
  providers: [MailsService],
})
export class MailsModule {
  constructor(private readonly mailService: MailsService) {}
  @Get('send-massive')
  async sendMassive() {
    await this.mailService.sendMassive();
    return 'Send Massive Email Successfully';
  }
}
