import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdatePaqueteDto {
  @IsOptional()
  @IsString()
  codigo?: string;

  @IsOptional()
  @IsString()
  destinatario?: string; 

  @IsOptional()
  @IsNumber()
  peso_kg?: number; 

  @IsOptional() 
  @IsString()
  tipo?: string;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  @IsString()
  rutaId?: string; 
}