import { IsString, IsOptional } from 'class-validator';

export class UpdateRutaDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  codigo?: string;
}