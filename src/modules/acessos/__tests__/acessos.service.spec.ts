import { Test, TestingModule } from '@nestjs/testing';
import { AcessosService } from '../acessos.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Acesso } from '../entities/acesso.entity';

describe('AcessosService', () => {
  let service: AcessosService;
  let acessoRepository: Repository<Acesso>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AcessosService,
        {
          provide: getRepositoryToken(Acesso),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<AcessosService>(AcessosService);
    acessoRepository = module.get<Repository<Acesso>>(
      getRepositoryToken(Acesso),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(acessoRepository).toBeDefined();
  });
});
