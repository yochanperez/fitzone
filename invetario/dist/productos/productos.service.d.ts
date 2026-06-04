import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { Categoria } from '../categorias/categoria.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductosService {
    private readonly productoRepository;
    private readonly categoriaRepository;
    constructor(productoRepository: Repository<Producto>, categoriaRepository: Repository<Categoria>);
    create(createProductoDto: CreateProductoDto): Promise<Producto>;
    findAll(): Promise<Producto[]>;
    findOne(id: string): Promise<Producto>;
    update(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto>;
    remove(id: string): Promise<Producto>;
}
