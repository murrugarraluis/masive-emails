import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class MailsService {
  constructor(private readonly mailerService: MailerService) {}
  // async sendMassive() {}
  async sendMail(email: string, name: string) {
    console.log(email);
    await this.mailerService.sendMail({
      to: email,
      subject: 'Hello from NestJS App',
      template: './newsletter',
      context: {
        name: name,
      },
    });
  }
}
