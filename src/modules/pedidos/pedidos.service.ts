import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
  ) {}

  criar_pedido(createPedidoDto: CreatePedidoDto) {
    return 'This action adds a new pedido';
  }

  listar_pedidos() {
    return this.pedidoRepository.find();
  }

  recuperar_pedido(id: number) {
    return `This action returns a #${id} pedido`;
  }

  atualizar_pedido(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remover_pedido(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
