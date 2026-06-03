import { Socio } from '../socios/socio.entity';
export declare class Plan {
    id: string;
    nombre: string;
    precio: number;
    activo: boolean;
    socios: Socio[];
}
