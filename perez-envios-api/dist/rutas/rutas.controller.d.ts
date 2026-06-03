import { RutasService } from './rutas.service';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';
export declare class RutasController {
    private readonly rutasService;
    constructor(rutasService: RutasService);
    create(createRutaDto: CreateRutaDto): Promise<import("./ruta.entity").Ruta>;
    findAll(): Promise<import("./ruta.entity").Ruta[]>;
    findOne(id: string): Promise<import("./ruta.entity").Ruta>;
    update(id: string, updateRutaDto: UpdateRutaDto): Promise<import("./ruta.entity").Ruta>;
    remove(id: string): Promise<import("./ruta.entity").Ruta>;
}
