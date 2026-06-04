import { Categoria } from '../categorias/categoria.entity';
export declare class Producto {
    id: string;
    categoria: Categoria;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    activo: boolean;
}
