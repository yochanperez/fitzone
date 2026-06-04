import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { Categoria } from '../categorias/categoria.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,

    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    const categoria = await this.categoriaRepository.findOne({ where: { id: createProductoDto.CategoriaId } });
    if (!categoria) throw new NotFoundException('Categoría no encontrada');

    const producto = this.productoRepository.create({
      nombre:      createProductoDto.nombre,
      descripcion: createProductoDto.descripcion,
      precio:        createProductoDto.precio,
      stock:         createProductoDto.stock,
      categoria,
    });
    return this.productoRepository.save(producto);
  }

  findAll() {
    return this.productoRepository.find();
  }

  async findOne(id: string) {
    const socio = await this.productoRepository.findOne({ where: { id } });
    if (!socio) throw new NotFoundException('producto no encontrado');
    return socio;
  }

  async update(id: string, updateProductoDto: UpdateProductoDto) {
    const producto = await this.findOne(id);

    if (updateProductoDto.CategoriaId) {
      const categoria = await this.categoriaRepository.findOne({ where: { id: updateProductoDto.CategoriaId } });
      if (!categoria) throw new NotFoundException('Categoría no encontrada');
      producto.categoria = categoria;
    }

    Object.assign(producto, updateProductoDto);
    return this.productoRepository.save(producto);
  }

  async remove(id: string) {
    const producto = await this.findOne(id);
    return this.productoRepository.remove(producto);
  }
}