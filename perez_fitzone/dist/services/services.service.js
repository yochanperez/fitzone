"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
let ServicesService = class ServicesService {
    cobros(cobrosDto) {
        let total_cobro = 0;
        const detalle = [];
        for (const socio of cobrosDto.socios) {
            let recargo_pct;
            if (socio.dias_atraso === 0)
                recargo_pct = 0;
            else if (socio.dias_atraso <= 7)
                recargo_pct = 5;
            else if (socio.dias_atraso <= 15)
                recargo_pct = 10;
            else
                recargo_pct = 20;
            const socioAny = socio;
            const cuota = socioAny.plan?.precio ? Number(socioAny.plan.precio) : 0;
            const recargo = +(cuota * recargo_pct / 100).toFixed(2);
            const cobro_socio = +(cuota + recargo).toFixed(2);
            total_cobro = +(total_cobro + cobro_socio).toFixed(2);
            detalle.push({
                nombre: socio.nombre,
                recargo_pct,
                total_cobro: cobro_socio,
            });
        }
        return {
            total_socios: detalle.length,
            total_cobro,
            detalle,
        };
    }
    clases(minutos_disponibles, duraciones) {
        const lista = duraciones.split(',').map((d) => parseInt(d.trim(), 10));
        let acumulado = 0;
        let indice = 0;
        const agendadas = [];
        while (indice < lista.length) {
            const duracion_actual = lista[indice];
            if (acumulado + duracion_actual <= minutos_disponibles) {
                acumulado += duracion_actual;
                agendadas.push(duracion_actual);
                indice++;
            }
            else {
                break;
            }
        }
        return {
            clases_agendadas: agendadas.length,
            minutos_libres: minutos_disponibles - acumulado,
            detalle: agendadas,
        };
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)()
], ServicesService);
//# sourceMappingURL=services.service.js.map