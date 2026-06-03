import { Ruta } from '../rutas/ruta.entity';
export declare class Paquete {
    id: string;
    codigo: string;
    destinatario: string;
    peso_kg: number;
    tipo: string;
    estado: string;
    ruta: Ruta;
}
