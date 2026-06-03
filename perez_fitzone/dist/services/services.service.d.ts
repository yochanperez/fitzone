import { CobrosDto } from './dto/cobros.dto';
export interface DetalleCobro {
    nombre: string;
    recargo_pct: number;
    total_cobro: number;
}
export declare class ServicesService {
    cobros(cobrosDto: CobrosDto): {
        total_socios: number;
        total_cobro: number;
        detalle: DetalleCobro[];
    };
    clases(minutos_disponibles: number, duraciones: string): {
        clases_agendadas: number;
        minutos_libres: number;
        detalle: number[];
    };
}
