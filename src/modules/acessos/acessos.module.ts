import { Module } from '@nestjs/common';
import { AcessosService } from './acessos.service';
import { AcessosController } from './acessos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acesso } from './entities/acesso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Acesso])],
  controllers: [AcessosController],
  providers: [AcessosService],
})
export class AcessosModule {}
