import { IsString } from 'class-validator';

export class CreateRutaDto {
  @IsString()
  nombre!: string;

  @IsString()
  codigo!: string;


}