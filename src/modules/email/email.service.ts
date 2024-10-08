// src/modules/email/services/email.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { ResendProvider } from './providers/resend.provider';
import { EmailProvider } from './interfaces/email-provider.interface';
import { NodemailerProvider } from './providers/nodemailer.provider';
import { SendGridProvider } from './providers/sendgrid.provider';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private emailProvider: EmailProvider;

  constructor(
    private readonly nodemailerProvider: NodemailerProvider,
    private readonly sendGridProvider: SendGridProvider,
    private readonly resendProvider: ResendProvider,
  ) {
    this.initializeProvider();
  }

  private initializeProvider() {
    const provider = process.env.EMAIL_PROVIDER || 'resend';

    switch (provider) {
      case 'sendgrid':
        this.emailProvider = this.sendGridProvider;
        this.logger.log('SendGrid selecionado como provedor de e-mail');
        break;
      case 'resend':
        this.emailProvider = this.resendProvider;
        this.logger.log('Resend selecionado como provedor de e-mail');
        break;
      case 'nodemailer':
      default:
        this.emailProvider = this.nodemailerProvider;
        this.logger.log('Nodemailer selecionado como provedor de e-mail');
        break;
    }
  }

  async sendEmail({ to, subject, content }: SendEmailDto) {
    try {
      await this.emailProvider.send(to, subject, content);
      this.logger.log(`Email enviado com sucesso para ${to}`);
    } catch (error) {
      this.logger.error(`Erro ao enviar email para ${to}`, error);
      throw new Error('Erro ao enviar email');
    }
  }
}
