import { ServicesService } from './services.service';
import { CobrosDto } from './dto/cobros.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    cobros(cobrosDto: CobrosDto): {
        total_socios: number;
        total_cobro: number;
        detalle: import("./services.service").DetalleCobro[];
    };
    clases(minutos: string, duraciones: string): {
        clases_agendadas: number;
        minutos_libres: number;
        detalle: number[];
    };
}
