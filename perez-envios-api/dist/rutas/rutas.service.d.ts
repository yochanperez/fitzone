import { Repository } from 'typeorm';
import { Ruta } from './ruta.entity';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';
export declare class RutasService {
    private readonly rutaRepository;
    constructor(rutaRepository: Repository<Ruta>);
    create(createRutaDto: CreateRutaDto): Promise<Ruta>;
    findAll(): Promise<Ruta[]>;
    findOne(id: string): Promise<Ruta>;
    update(id: string, updateRutaDto: UpdateRutaDto): Promise<Ruta>;
    remove(id: string): Promise<Ruta>;
}
