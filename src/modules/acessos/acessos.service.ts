import { Injectable } from '@nestjs/common';
import { CreateAcessoDto } from './dto/create-acesso.dto';
import { UpdateAcessoDto } from './dto/update-acesso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Acesso } from './entities/acesso.entity';

@Injectable()
export class AcessosService {
  constructor(
    @InjectRepository(Acesso)
    private acessoRepository: Repository<Acesso>,
  ) {}

  async create(createAcessoDto: CreateAcessoDto) {
    try {
      const acesso = this.acessoRepository.create(createAcessoDto);
      return await this.acessoRepository.save(acesso);
    } catch (error) {
      throw new Error('Erro ao criar acesso: ' + error.message);
    }
  }

  async findAll() {
    const acessos = await this.acessoRepository.find();
    if (!acessos) {
      throw new Error('Nenhum acesso encontrado');
    }
    return acessos;
  }

  async findOne(id: number) {
    const acesso = await this.acessoRepository.findOne({ where: { id } });
    if (!acesso) {
      throw new Error('Acesso não encontrado');
    }
    return acesso;
  }

  async update(id: number, updateAcessoDto: UpdateAcessoDto) {
    const updated_acesso = await this.acessoRepository.update(
      id,
      updateAcessoDto,
    );
    if (!updated_acesso.affected) {
      throw new Error('Acesso não encontrado');
    }
    return updated_acesso;
  }

  async remove(id: number) {
    const deleted_acesso = await this.acessoRepository.delete(id);
    if (!deleted_acesso.affected) {
      throw new Error('Acesso não encontrado');
    }
    return deleted_acesso;
  }

  async findFiltered(startDate: Date, endDate: Date) {
    return await this.acessoRepository
      .createQueryBuilder('acesso')
      .where('acesso.createdAt BETWEEN :startDate AND :endDate', {
        startDate,
        endDate,
      })
      .orderBy('acesso.createdAt', 'DESC')
      .getMany();
  }
}
