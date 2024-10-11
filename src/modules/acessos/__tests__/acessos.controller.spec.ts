import { Test, TestingModule } from '@nestjs/testing';
import { AcessosController } from '../acessos.controller';
import { AcessosService } from '../acessos.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Acesso } from '../entities/acessos.entity';

describe('AcessosController', () => {
  let controller: AcessosController;
  let service: AcessosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcessosController],
      providers: [
        AcessosService,
        {
          provide: getRepositoryToken(Acesso),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<AcessosController>(AcessosController);
    service = module.get<AcessosService>(AcessosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});
