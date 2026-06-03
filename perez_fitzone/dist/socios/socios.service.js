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
exports.SociosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const socio_entity_1 = require("./socio.entity");
const plan_entity_1 = require("../planes/plan.entity");
let SociosService = class SociosService {
    socioRepository;
    planRepository;
    constructor(socioRepository, planRepository) {
        this.socioRepository = socioRepository;
        this.planRepository = planRepository;
    }
    async create(createSocioDto) {
        const plan = await this.planRepository.findOne({ where: { id: createSocioDto.planId } });
        if (!plan)
            throw new common_1.NotFoundException('Plan no encontrado');
        const socio = this.socioRepository.create({
            nombre: createSocioDto.nombre,
            cedula: createSocioDto.cedula,
            dias_atraso: createSocioDto.dias_atraso ?? 0,
            activo: createSocioDto.activo ?? true,
            plan,
        });
        return this.socioRepository.save(socio);
    }
    findAll() {
        return this.socioRepository.find();
    }
    async findOne(id) {
        const socio = await this.socioRepository.findOne({ where: { id } });
        if (!socio)
            throw new common_1.NotFoundException('Socio no encontrado');
        return socio;
    }
    async update(id, updateSocioDto) {
        const socio = await this.findOne(id);
        if (updateSocioDto.planId) {
            const plan = await this.planRepository.findOne({ where: { id: updateSocioDto.planId } });
            if (!plan)
                throw new common_1.NotFoundException('Plan no encontrado');
            socio.plan = plan;
        }
        Object.assign(socio, updateSocioDto);
        return this.socioRepository.save(socio);
    }
    async remove(id) {
        const socio = await this.findOne(id);
        return this.socioRepository.remove(socio);
    }
};
exports.SociosService = SociosService;
exports.SociosService = SociosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(socio_entity_1.Socio)),
    __param(1, (0, typeorm_1.InjectRepository)(plan_entity_1.Plan)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SociosService);
//# sourceMappingURL=socios.service.js.map