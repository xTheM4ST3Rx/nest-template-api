import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from 'src/modules/pedidos/entities/pedido.entity';
import { CreatePedidoDto } from 'src/modules/pedidos/dto/create-pedido.dto';
import { UpdatePedidoDto } from 'src/modules/pedidos/dto/update-pedido.dto';
import { IPedidosRepository } from '@repositories/interfaces/pedidos.interface';

@Injectable()
export class TypeOrmPedidosRepository extends IPedidosRepository {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) {
    super();
  }

  async criarPedido(createPedidoDto: CreatePedidoDto) {}

  async listarPedido() {}

  async recuperarPedido(id: number) {}

  async atualizarAcesso(id: number, updatePedidoDto: UpdatePedidoDto) {}

  async removerAcesso(id: number) {}
}
