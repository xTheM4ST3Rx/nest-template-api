// src/modules/email/providers/resend.provider.ts
import { Injectable } from '@nestjs/common';
import { EmailProvider } from '../interfaces/email-provider.interface';
import { Resend } from 'resend';

@Injectable()
export class ResendProvider implements EmailProvider {
  private readonly resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY || 'RESEND.api_key');
  }

  async send(to: string, subject: string, content: string) {
    try {
      const { data } = await this.resend.emails.send({
        from: 'noreply@seuprojeto.com', // O endereço de e-mail que você configurou no Resend
        to,
        subject,
        text: content,
      });

      console.log(`Email enviado com sucesso via Resend: ${data.id}`);
    } catch (error) {
      console.error(`Erro ao enviar email via Resend: ${error.message}`);
      throw new Error('Erro ao enviar email via Resend');
    }
  }
}
