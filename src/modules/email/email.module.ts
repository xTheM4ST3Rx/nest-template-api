import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { NodemailerProvider } from './providers/nodemailer.provider';
import { SendGridProvider } from './providers/sendgrid.provider';
import { ResendProvider } from './providers/resend.provider';

@Module({
  controllers: [EmailController],
  providers: [
    EmailService,
    NodemailerProvider,
    SendGridProvider,
    ResendProvider,
  ],
})
export class EmailModule {}
