"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const producto_entity_1 = require("./producto.entity");
const categoria_entity_1 = require("../categorias/categoria.entity");
let ProductosService = class ProductosService {
    productoRepository;
    categoriaRepository;
    constructor(productoRepository, categoriaRepository) {
        this.productoRepository = productoRepository;
        this.categoriaRepository = categoriaRepository;
    }
    async create(createProductoDto) {
        const categoria = await this.categoriaRepository.findOne({ where: { id: createProductoDto.CategoriaId } });
        if (!categoria)
            throw new common_1.NotFoundException('Categoría no encontrada');
        const producto = this.productoRepository.create({
            nombre: createProductoDto.nombre,
            descripcion: createProductoDto.descripcion,
            precio: createProductoDto.precio,
            stock: createProductoDto.stock,
            categoria,
        });
        return this.productoRepository.save(producto);
    }
    findAll() {
        return this.productoRepository.find();
    }
    async findOne(id) {
        const socio = await this.productoRepository.findOne({ where: { id } });
        if (!socio)
            throw new common_1.NotFoundException('producto no encontrado');
        return socio;
    }
    async update(id, updateProductoDto) {
        const producto = await this.findOne(id);
        if (updateProductoDto.CategoriaId) {
            const categoria = await this.categoriaRepository.findOne({ where: { id: updateProductoDto.CategoriaId } });
            if (!categoria)
                throw new common_1.NotFoundException('Categoría no encontrada');
            producto.categoria = categoria;
        }
        Object.assign(producto, updateProductoDto);
        return this.productoRepository.save(producto);
    }
    async remove(id) {
        const producto = await this.findOne(id);
        return this.productoRepository.remove(producto);
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __param(1, (0, typeorm_1.InjectRepository)(categoria_entity_1.Categoria)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductosService);
//# sourceMappingURL=productos.service.js.map