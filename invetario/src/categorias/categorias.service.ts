import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Producto } from 'src/productos/producto.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)

    private readonly categoriasRepository: Repository<Categoria>,
  ) {}

  create(createCategoriaDto: CreateCategoriaDto) {
    const categoria = this.categoriasRepository.create(createCategoriaDto);
    return this.categoriasRepository.save(categoria);
  }

  findAll() {
    return this.categoriasRepository.find({ relations: { productos: true } });
  }

  
  async findOne(id: string) {
    const categoria = await this.categoriasRepository.findOne({ where: { id }, relations: { productos: true } });
    if (!categoria) throw new NotFoundException('Categoria no encontrada');
    return categoria;
  }

  async update(id: string, updateCategoriaDto: UpdateCategoriaDto) {
    const categoria = await this.findOne(id);
    Object.assign(categoria, updateCategoriaDto);
    return this.categoriasRepository.save(categoria);
  }

  async remove(id: string) {
    const categoria = await this.categoriasRepository.findOne({ where: { id }, relations: { productos: true } });
    if (!categoria) throw new NotFoundException('Categoria no encontrada');
    if (categoria.productos && categoria.productos.length > 0)
      throw new BadRequestException('No se puede eliminar una categoria con productos activos');
    return this.categoriasRepository.remove(categoria);
  }
}