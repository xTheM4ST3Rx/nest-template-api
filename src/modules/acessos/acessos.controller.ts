import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AcessosService } from './acessos.service';
import { CreateAcessoDto } from './dto/create-acesso.dto';
import { UpdateAcessoDto } from './dto/update-acesso.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseAcessoDto } from './dto/response-acesso.dto';
import { FindFilteredDto } from './dto/findfiltered-acesso.dto';

@ApiTags('Acessos')
@Controller('acessos')
export class AcessosController {
  constructor(private readonly acessosService: AcessosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar Acesso' })
  @ApiResponse({
    status: 201,
    description: 'Acesso criado com sucesso',
    type: ResponseAcessoDto,
  })
  create(@Body() createAcessoDto: CreateAcessoDto) {
    return this.acessosService.create(createAcessoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar Acessos' })
  @ApiResponse({
    status: 200,
    description: 'Listagem de acessos',
    type: [ResponseAcessoDto],
  })
  findAll() {
    return this.acessosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Recuperar Acesso' })
  @ApiResponse({
    status: 200,
    description: 'Acesso recuperado com sucesso',
    type: ResponseAcessoDto,
  })
  findOne(@Param('id') id: string) {
    return this.acessosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Acesso' })
  @ApiResponse({
    status: 200,
    description: 'Acesso atualizado com sucesso',
    type: ResponseAcessoDto,
  })
  update(@Param('id') id: string, @Body() updateAcessoDto: UpdateAcessoDto) {
    return this.acessosService.update(+id, updateAcessoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover Acesso' })
  @ApiResponse({ status: 200, description: 'Acesso removido com sucesso' })
  remove(@Param('id') id: string) {
    return this.acessosService.remove(+id);
  }

  @Get('filtered/:startDate/:endDate')
  @ApiOperation({ summary: 'Filtrar Acessos' })
  @ApiResponse({
    status: 200,
    description: 'Filtragem de acessos',
    type: [ResponseAcessoDto],
  })
  findFiltered(@Query() query: FindFilteredDto) {
    const { startDate, endDate } = query;
    return this.acessosService.findFiltered(
      new Date(startDate),
      new Date(endDate),
    );
  }
}
