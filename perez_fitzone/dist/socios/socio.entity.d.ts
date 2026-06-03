import { Plan } from '../planes/plan.entity';
export declare class Socio {
    id: string;
    plan: Plan;
    nombre: string;
    cedula: string;
    dias_atraso: number;
    activo: boolean;
    creado_en: Date;
}
