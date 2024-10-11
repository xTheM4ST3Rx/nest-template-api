import { Provider } from '@nestjs/common';
import { SqliteAcessosRepository } from './sqlite/acessos.repository';
import { Repository } from 'typeorm';
import { Acesso } from 'src/modules/acessos/entities/acessos.entity';
import { TypeOrmAcessosRepository } from './typeorm/acessos.repository';
import { Pedido } from 'src/modules/pedidos/entities/pedido.entity';
import { TypeOrmPedidosRepository } from './typeorm/pedidos.repository';
import { SqlitePedidosRepository } from './sqlite/pedidos.repository';
import { getRepositoryToken } from '@nestjs/typeorm';

export const RepositoryFactory: Provider[] = [
  {
    provide: 'Repositorios',
    useFactory: (
      acessoTypeOrm: Repository<Acesso>,
      pedidoTypeOrm: Repository<Pedido>,
    ) => {
      const dbType = process.env.DB_TYPE || 'sqlite';

      switch (dbType) {
        case 'sqlite':
          return {
            acessos: new SqliteAcessosRepository(acessoTypeOrm),
            pedidos: new SqlitePedidosRepository(pedidoTypeOrm),
          };
        case 'typeorm':
          return {
            acessos: new TypeOrmAcessosRepository(acessoTypeOrm),
            pedidos: new TypeOrmPedidosRepository(pedidoTypeOrm),
          };
        default:
          throw new Error('Tipo de banco de dados não suportado');
      }
    },
    inject: [getRepositoryToken(Acesso), getRepositoryToken(Pedido)],
  },
];
