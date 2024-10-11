import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IAcessosRepository } from '../interfaces/acessos.interface';
import { Pedido } from 'src/modules/pedidos/entities/pedido.entity';
import { CreatePedidoDto } from 'src/modules/pedidos/dto/create-pedido.dto';
import { UpdatePedidoDto } from 'src/modules/pedidos/dto/update-pedido.dto';

@Injectable()
export class SqlitePedidosRepository extends IAcessosRepository {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) {
    super();
  }

  async criarPedido(createPedidoDto: CreatePedidoDto) {}

  async listarPedidos() {}

  async recuperarPedido(id: number) {}

  async atualizarPedido(id: number, updatePedidoDto: UpdatePedidoDto) {}

  async removerAcesso(id: number) {}
}
