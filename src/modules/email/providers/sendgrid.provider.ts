// src/modules/email/providers/sendgrid.provider.ts
import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { EmailProvider } from '../interfaces/email-provider.interface';

@Injectable()
export class SendGridProvider implements EmailProvider {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || 'SG.api_key'); // Chave da API SendGrid
  }

  async send(to: string, subject: string, content: string) {
    const msg = {
      to,
      from: 'noreply@seuprojeto.com',
      subject,
      text: content,
    };
    await sgMail.send(msg);
  }
}
