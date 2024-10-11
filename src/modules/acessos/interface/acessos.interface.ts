import { NotImplementedException } from '@nestjs/common';
import { CreateAcessoDto } from '../dto/create-acesso.dto';
import { UpdateAcessoDto } from '../dto/update-acesso.dto';

export class IAcessosRepository {
  listar_acessos() {
    throw new NotImplementedException('Método não implementado');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  criar_acesso(createAcessoDto: CreateAcessoDto) {
    throw new NotImplementedException('Método não implementado');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  recuperar_acesso(id: number) {
    throw new NotImplementedException('Método não implementado');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  atualizar_acesso(id: number, updateAcessoDto: UpdateAcessoDto) {
    throw new NotImplementedException('Método não implementado');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remover_acesso(id: number) {
    throw new NotImplementedException('Método não implementado');
  }
}
