import { IsString, IsNumber } from 'class-validator';

export class CreatePaqueteDto {
  @IsString()
  codigo!: string;

  @IsString()
  destinatario!: string; 

  @IsNumber()
  peso_kg!: number; 

  @IsString()
  tipo!: string; 

  @IsString()
  estado!: string; 

  @IsString()
  rutaId!: string; 
}