import { Inject, Injectable } from '@nestjs/common';
import { CreateAcessoDto } from './dto/create-acesso.dto';
import { UpdateAcessoDto } from './dto/update-acesso.dto';
import { IRepository } from '@repositories/types';

@Injectable()
export class AcessosService {
  constructor(
    @Inject('Repositorios')
    private readonly repositorios: IRepository,
  ) {}

  async criarAcesso(createAcessoDto: CreateAcessoDto) {
    return await this.repositorios.acessos.criarAcesso(createAcessoDto);
  }

  async listarAcessos() {
    return await this.repositorios.acessos.listarAcessos();
  }

  async recuperarAcesso(id: number) {
    return await this.repositorios.acessos.recuperarAcesso(id);
  }

  async atualizarAcesso(id: number, updateAcessoDto: UpdateAcessoDto) {
    return await this.repositorios.acessos.atualizarAcesso(id, updateAcessoDto);
  }

  async removerAcesso(id: number) {
    return await this.repositorios.acessos.removerAcesso(id);
  }
}
