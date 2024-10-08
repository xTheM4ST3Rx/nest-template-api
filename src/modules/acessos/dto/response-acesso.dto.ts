import { ApiProperty } from '@nestjs/swagger';

export class ResponseAcessoDto {
  @ApiProperty({ description: 'ID do Acesso', example: 1 })
  id: number;

  @ApiProperty({ description: 'Nome do Acesso', example: 'John Doe' })
  name: string;

  @ApiProperty({ description: 'Email do Acesso', example: 'john@email.com' })
  email: string;

  @ApiProperty({
    description: 'Data de Criação',
    example: '2023-01-01T00:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Data de Atualização',
    example: '2023-01-02T00:00:00.000Z',
  })
  updatedAt: Date;
}
