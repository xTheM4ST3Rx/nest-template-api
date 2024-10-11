import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IAcessosRepository } from '../interfaces/acessos.interface';
import { Acesso } from 'src/modules/acessos/entities/acessos.entity';
import { CreateAcessoDto } from 'src/modules/acessos/dto/create-acesso.dto';
import { UpdateAcessoDto } from 'src/modules/acessos/dto/update-acesso.dto';

@Injectable()
export class SqliteAcessosRepository extends IAcessosRepository {
  constructor(
    @InjectRepository(Acesso)
    private readonly acessoRepository: Repository<Acesso>,
  ) {
    super();
  }

  async criarAcesso(createAcessoDto: CreateAcessoDto) {
    try {
      const acesso = this.acessoRepository.create(createAcessoDto);
      return await this.acessoRepository.save(acesso);
    } catch (error) {
      throw new Error('Erro ao criar acesso: ' + error.message);
    }
  }

  async listarAcessos() {
    const acessos = await this.acessoRepository.find();
    if (!acessos) {
      throw new Error('Nenhum acesso encontrado');
    }
    return acessos;
  }

  async recuperarAcesso(id: number) {
    const acesso = await this.acessoRepository.findOne({ where: { id } });
    if (!acesso) {
      throw new Error('Acesso não encontrado');
    }
    return acesso;
  }

  async atualizarAcesso(id: number, updateAcessoDto: UpdateAcessoDto) {
    const updated_acesso = await this.acessoRepository.update(
      id,
      updateAcessoDto,
    );
    if (!updated_acesso.affected) {
      throw new Error('Acesso não encontrado');
    }
    return updated_acesso;
  }

  async removerAcesso(id: number) {
    const deleted_acesso = await this.acessoRepository.delete(id);
    if (!deleted_acesso.affected) {
      throw new Error('Acesso não encontrado');
    }

    return deleted_acesso;
  }
}
