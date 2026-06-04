import { IsString, IsUUID, IsNumber } from 'class-validator';

export class CreateProductoDto {
  @IsUUID()
  CategoriaId!: string;

  @IsString()
  nombre!: string;

  @IsString()
  descripcion!: string;

  @IsNumber()
  precio!: number;

  @IsNumber()
  stock!: number;


}