import { Controller, Get } from '@nestjs/common';
import { MailsService } from './mails.service';
@Controller('mails')
export class MailsController {
  constructor(private readonly mailsService: MailsService) {}
  @Get('send')
  async sendEmail() {
    const email = 'luismurrugarra17@gmail.com';
    const name = 'Luis Murrugarra';
    await this.mailsService.sendMail(email, name);
    return 'Email Send !!!';
  }
}
