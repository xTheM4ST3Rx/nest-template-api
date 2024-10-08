import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateAcessoDto {
  @ApiProperty({ description: 'Nome do Acesso', example: 'John Doe' })
  @IsString()
  @MinLength(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
  name: string;

  @ApiProperty({ description: 'Email do Acesso', example: 'john@email.com' })
  @IsEmail({}, { message: 'O email deve ser válido' })
  email: string;
}
