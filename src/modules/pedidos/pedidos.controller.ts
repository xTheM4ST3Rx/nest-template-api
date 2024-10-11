import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Pedidos')
@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar Pedido',
  })
  @ApiResponse({
    status: 201,
    description: ' Pedido criado com sucesso',
    type: CreatePedidoDto,
  })
  criar_pedido(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidosService.criar_pedido(createPedidoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar Pedidos',
  })
  @ApiResponse({
    status: 200,
    description: 'Listagem de pedidos',
    type: [CreatePedidoDto],
  })
  listar_pedidos() {
    return this.pedidosService.listar_pedidos();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Recuperar Pedido',
  })
  @ApiResponse({
    status: 200,
    description: 'Pedido recuperado com sucesso',
    type: CreatePedidoDto,
  })
  recuperar_pedido(@Param('id') id: string) {
    return this.pedidosService.recuperar_pedido(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar Pedido',
  })
  @ApiResponse({
    status: 200,
    description: 'Pedido atualizado com sucesso',
    type: UpdatePedidoDto,
  })
  atualizar_pedido(
    @Param('id') id: string,
    @Body() updatePedidoDto: UpdatePedidoDto,
  ) {
    return this.pedidosService.atualizar_pedido(+id, updatePedidoDto);
  }

  @ApiOperation({
    summary: 'Remover Pedido',
  })
  @ApiResponse({
    status: 200,
    description: 'Pedido removido com sucesso',
  })
  @Delete(':id')
  remover_pedido(@Param('id') id: string) {
    return this.pedidosService.remover_pedido(+id);
  }
}
