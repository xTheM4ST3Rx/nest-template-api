import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AcessosService } from './acessos.service';
import { CreateAcessoDto } from './dto/create-acesso.dto';
import { UpdateAcessoDto } from './dto/update-acesso.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseAcessoDto } from './dto/response-acesso.dto';

@ApiTags('Acessos')
@Controller('acessos')
export class AcessosController {
  constructor(private readonly acessosService: AcessosService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar Acesso',
  })
  @ApiResponse({
    status: 201,
    description: 'Acesso criado com sucesso',
    type: ResponseAcessoDto,
  })
  criarAcesso(@Body() createAcessoDto: CreateAcessoDto) {
    return this.acessosService.criarAcesso(createAcessoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar Acessos',
  })
  @ApiResponse({
    status: 200,
    description: 'Listagem de acessos',
    type: [ResponseAcessoDto],
  })
  listarAcessos() {
    return this.acessosService.listarAcessos();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Recuperar Acesso',
  })
  @ApiResponse({
    status: 200,
    description: 'Acesso recuperado com sucesso',
    type: ResponseAcessoDto,
  })
  recuperarAcesso(@Param('id') id: string) {
    return this.acessosService.recuperarAcesso(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar Acesso',
  })
  @ApiResponse({
    status: 200,
    description: 'Acesso atualizado com sucesso',
    type: ResponseAcessoDto,
  })
  atualizarAcesso(
    @Param('id') id: string,
    @Body() updateAcessoDto: UpdateAcessoDto,
  ) {
    return this.acessosService.atualizarAcesso(+id, updateAcessoDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remover Acesso',
  })
  @ApiResponse({
    status: 200,
    description: 'Acesso removido com sucesso',
  })
  removerAcesso(@Param('id') id: string) {
    return this.acessosService.removerAcesso(+id);
  }
}
