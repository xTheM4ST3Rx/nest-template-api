import { NotImplementedException } from '@nestjs/common';
import { CreateAcessoDto } from 'src/modules/acessos/dto/create-acesso.dto';
import { UpdateAcessoDto } from 'src/modules/acessos/dto/update-acesso.dto';

export class IAcessosRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async criarAcesso(createAcessoDto: CreateAcessoDto): Promise<any> {
    throw new NotImplementedException(
      'AcessosRepository criarAcesso não implementado',
    );
  }
  async listarAcessos(): Promise<any> {
    throw new NotImplementedException(
      'AcessosRepository -> listarAcessos não implementado',
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async recuperarAcesso(id: number): Promise<any> {
    throw new NotImplementedException(
      'AcessosRepository -> recuperarAcesso não implementado',
    );
  }

  async atualizarAcesso(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id: number, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateAcessoDto: UpdateAcessoDto,
  ): Promise<any> {
    throw new NotImplementedException(
      'AcessosRepository -> atualizarAcesso não implementado',
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async removerAcesso(id: number): Promise<any> {
    throw new NotImplementedException(
      'AcessosRepository -> removerAcesso não implementado',
    );
  }
}
