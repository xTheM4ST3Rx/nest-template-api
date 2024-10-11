import { Module } from '@nestjs/common';
import { AcessosService } from './acessos.service';
import { AcessosController } from './acessos.controller';
import { RepositoryModule } from '@repositories/repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [AcessosController],
  providers: [AcessosService],
})
export class AcessosModule {}
