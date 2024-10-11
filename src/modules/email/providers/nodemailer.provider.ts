// src/modules/email/providers/nodemailer.provider.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { EmailProvider } from '../interfaces/email-provider.interface';

@Injectable()
export class NodemailerProvider extends EmailProvider {
  private transporter: nodemailer.Transporter;

  constructor() {
    super();
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: +process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  async send(to: string, subject: string, content: string) {
    const mailOptions = {
      from: 'noreply@seuprojeto.com',
      to,
      subject,
      text: content,
    };
    await this.transporter.sendMail(mailOptions);
  }
}
