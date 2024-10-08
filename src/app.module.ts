import { Module } from '@nestjs/common';
import { AcessosModule } from './modules/acessos/acessos.module';
import { DatabaseModule } from './database/database.module';
import { EmailModule } from './modules/email/email.module';

@Module({
  imports: [DatabaseModule, AcessosModule, EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
