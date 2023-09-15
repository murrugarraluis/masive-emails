import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { tr } from '@faker-js/faker';
@Injectable()
export class MailsService {
  constructor(private readonly mailerService: MailerService) {}
  // async sendMassive() {}
  async sendMail(email: string, name: string) {
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Hello from NestJS App',
        template: './newsletter',
        context: {
          name: name,
        },
      });
      console.log('Email sent successfully to ' + email);
      return true;
    } catch (e) {
      console.error('Error sending email:', e);
      return false;
    }
  }
}
