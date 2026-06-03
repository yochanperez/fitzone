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
exports.PaquetesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const paquete_entity_1 = require("./paquete.entity");
let PaquetesService = class PaquetesService {
    paqueteRepository;
    constructor(paqueteRepository) {
        this.paqueteRepository = paqueteRepository;
    }
    async create(createPaqueteDto) {
        const { rutaId, ...datosPaquete } = createPaqueteDto;
        const paquete = this.paqueteRepository.create({
            ...datosPaquete,
            ruta: { id: rutaId },
        });
        return this.paqueteRepository.save(paquete);
    }
    findAll() {
        return this.paqueteRepository.find({ relations: { ruta: true } });
    }
    async findOne(id) {
        const paquete = await this.paqueteRepository.findOne({
            where: { id },
            relations: { ruta: true },
        });
        if (!paquete)
            throw new common_1.NotFoundException('Paquete no encontrado');
        return paquete;
    }
    async update(id, updatePaqueteDto) {
        const paquete = await this.findOne(id);
        const { rutaId, ...datosActualizar } = updatePaqueteDto;
        Object.assign(paquete, datosActualizar);
        if (rutaId) {
            paquete.ruta = { id: rutaId };
        }
        return this.paqueteRepository.save(paquete);
    }
    async remove(id) {
        const paquete = await this.findOne(id);
        return this.paqueteRepository.remove(paquete);
    }
};
exports.PaquetesService = PaquetesService;
exports.PaquetesService = PaquetesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paquete_entity_1.Paquete)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaquetesService);
//# sourceMappingURL=paquetes.service.js.map