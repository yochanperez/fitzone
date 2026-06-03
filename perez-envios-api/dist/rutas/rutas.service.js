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
exports.RutasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ruta_entity_1 = require("./ruta.entity");
let RutasService = class RutasService {
    rutaRepository;
    constructor(rutaRepository) {
        this.rutaRepository = rutaRepository;
    }
    create(createRutaDto) {
        const ruta = this.rutaRepository.create(createRutaDto);
        return this.rutaRepository.save(ruta);
    }
    findAll() {
        return this.rutaRepository.find({ relations: { paquetes: true } });
    }
    async findOne(id) {
        const ruta = await this.rutaRepository.findOne({
            where: { id },
            relations: { paquetes: true }
        });
        if (!ruta)
            throw new common_1.NotFoundException('Ruta no encontrada');
        return ruta;
    }
    async update(id, updateRutaDto) {
        const ruta = await this.findOne(id);
        Object.assign(ruta, updateRutaDto);
        return this.rutaRepository.save(ruta);
    }
    async remove(id) {
        const ruta = await this.rutaRepository.findOne({
            where: { id },
            relations: { paquetes: true }
        });
        if (!ruta)
            throw new common_1.NotFoundException('Ruta no encontrada');
        if (ruta.paquetes && ruta.paquetes.length > 0) {
            throw new common_1.BadRequestException('No se puede eliminar una ruta que tiene paquetes asignados');
        }
        return this.rutaRepository.remove(ruta);
    }
};
exports.RutasService = RutasService;
exports.RutasService = RutasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ruta_entity_1.Ruta)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RutasService);
//# sourceMappingURL=rutas.service.js.map