import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    create(createProductoDto: CreateProductoDto): Promise<import("./producto.entity").Producto>;
    findAll(): Promise<import("./producto.entity").Producto[]>;
    findOne(id: string): Promise<import("./producto.entity").Producto>;
    update(id: string, updateProductoDto: UpdateProductoDto): Promise<import("./producto.entity").Producto>;
    remove(id: string): Promise<import("./producto.entity").Producto>;
}
