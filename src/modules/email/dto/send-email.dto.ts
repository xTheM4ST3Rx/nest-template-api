import { ApiProperty } from '@nestjs/swagger';

export class SendEmailDto {
  @ApiProperty({ description: 'Email de Destino', example: 'john@email.com' })
  to: string;

  @ApiProperty({ description: 'Assunto', example: 'Assunto do Email' })
  subject: string;

  @ApiProperty({ description: 'Conteúdo', example: ' Conteúdo do Email' })
  content: string;
}
