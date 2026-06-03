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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paquete = void 0;
const typeorm_1 = require("typeorm");
const ruta_entity_1 = require("../rutas/ruta.entity");
let Paquete = class Paquete {
    id;
    codigo;
    destinatario;
    peso_kg;
    tipo;
    estado;
    ruta;
};
exports.Paquete = Paquete;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Paquete.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Paquete.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paquete.prototype, "destinatario", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 6, scale: 2 }),
    __metadata("design:type", Number)
], Paquete.prototype, "peso_kg", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paquete.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'En bodega' }),
    __metadata("design:type", String)
], Paquete.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ruta_entity_1.Ruta, (ruta) => ruta.paquetes, { onDelete: 'CASCADE' }),
    __metadata("design:type", ruta_entity_1.Ruta)
], Paquete.prototype, "ruta", void 0);
exports.Paquete = Paquete = __decorate([
    (0, typeorm_1.Entity)('paquetes')
], Paquete);
//# sourceMappingURL=paquete.entity.js.map