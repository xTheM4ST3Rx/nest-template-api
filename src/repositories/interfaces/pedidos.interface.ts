import { NotImplementedException } from '@nestjs/common';
import { CreatePedidoDto } from 'src/modules/pedidos/dto/create-pedido.dto';
import { UpdatePedidoDto } from 'src/modules/pedidos/dto/update-pedido.dto';

export class IPedidosRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async criarPedido(createPedidoDto: CreatePedidoDto): Promise<any> {
    throw new NotImplementedException(
      'PedidosRepository criarPedido não implementado',
    );
  }
  async listarPedidos(): Promise<any> {
    throw new NotImplementedException(
      'PedidosRepository -> listarPedidos não implementado',
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async recuperarPedido(id: number): Promise<any> {
    throw new NotImplementedException(
      'PedidosRepository -> recuperarPedido não implementado',
    );
  }

  async atualizarPedido(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id: number, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updatePedidoDto: UpdatePedidoDto,
  ): Promise<any> {
    throw new NotImplementedException(
      'PedidosRepository -> atualizarPedido não implementado',
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async removerPedido(id: number): Promise<any> {
    throw new NotImplementedException(
      'PedidosRepository -> removerPedido não implementado',
    );
  }
}
