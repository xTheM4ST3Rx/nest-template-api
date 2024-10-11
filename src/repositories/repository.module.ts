import { Module } from '@nestjs/common';
import { RepositoryFactory } from './repository.factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acesso } from 'src/modules/acessos/entities/acessos.entity';
import { Pedido } from 'src/modules/pedidos/entities/pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Acesso, Pedido])],
  providers: [...RepositoryFactory],
  exports: [...RepositoryFactory],
})
export class RepositoryModule {}
