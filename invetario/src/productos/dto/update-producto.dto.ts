import { IsString, IsUUID, IsBoolean, IsOptional,  IsNumber } from 'class-validator';

export class UpdateProductoDto {
  @IsUUID()
  CategoriaId!: string;

  @IsString()
  @IsOptional()
  nombre!: string;

  @IsString()
  @IsOptional()
  descripcion!: string;

  @IsNumber()
  @IsOptional()
  precio!: number;

  @IsNumber()
  @IsOptional()
  stock!: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}