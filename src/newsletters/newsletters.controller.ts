import { Controller, Get, Param } from '@nestjs/common';
import { NewslettersService } from './newsletters.service';
import { UsersService } from '../users/services/users.service';
import { MailsService } from '../mails/mails.service';
import { UserNewsletterService } from '../users/services/user-newsletter.service';

@Controller('newsletters')
export class NewslettersController {
  private readonly NUMBER_USERS_SEND = 2;
  constructor(
    private readonly newslettersService: NewslettersService,
    private readonly userService: UsersService,
    private readonly userNewsletterService: UserNewsletterService,
    private readonly mailsService: MailsService,
  ) {}
  @Get(':id/send-email')
  async sendNewsletterToUsers(@Param('id') id: string) {
    // RECUPERAR NEWSLETTER
    const newsletter = await this.newslettersService.getOne(id);

    const userNewsletters =
      await this.userNewsletterService.getUsersForSendNewsletter(
        newsletter.id,
        this.NUMBER_USERS_SEND,
      );
    // ENVIAR EMAIL BAJO EL SERVICIO DE MAIL
    for (const userNewsletter of userNewsletters) {
      const sendSuccessfully = await this.mailsService.sendMail(
        userNewsletter.user.email,
        userNewsletter.user.name,
      );
      if (sendSuccessfully) {
        //   ACTUALIZAR LOS CAMPOS DE LOS USUARIOS ENVIADOS
        await this.userNewsletterService.updateSendEmailToTrue(userNewsletter);
      }
    }
  }
}
