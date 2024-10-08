import { IsDateString, IsNotEmpty } from 'class-validator';

export class FindFilteredDto {
  @IsNotEmpty({ message: 'A data de início é obrigatória' })
  @IsDateString({}, { message: 'A data de início deve ser válida' })
  startDate: string;

  @IsNotEmpty({ message: 'A data de término é obrigatória' })
  @IsDateString({}, { message: 'A data de término deve ser válida' })
  endDate: string;
}
