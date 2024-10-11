import { Module } from '@nestjs/common';
import { AcessosModule } from './modules/acessos/acessos.module';
import { DatabaseModule } from './database/database.module';
import { RepositoryModule } from '@repositories/repository.module';

@Module({
  imports: [DatabaseModule, RepositoryModule, AcessosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
