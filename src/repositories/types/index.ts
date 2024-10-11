import { IAcessosRepository } from '@repositories/interfaces/acessos.interface';
import { IPedidosRepository } from '@repositories/interfaces/pedidos.interface';

export interface IRepository {
  acessos: IAcessosRepository;
  pedidos: IPedidosRepository;
}
