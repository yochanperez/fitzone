import { Repository } from 'typeorm';
import { Paquete } from './paquete.entity';
import { CreatePaqueteDto } from './dto/create-paquete.dto';
import { UpdatePaqueteDto } from './dto/update-paquete.dto';
export declare class PaquetesService {
    private readonly paqueteRepository;
    constructor(paqueteRepository: Repository<Paquete>);
    create(createPaqueteDto: CreatePaqueteDto): Promise<Paquete>;
    findAll(): Promise<Paquete[]>;
    findOne(id: string): Promise<Paquete>;
    update(id: string, updatePaqueteDto: UpdatePaqueteDto): Promise<Paquete>;
    remove(id: string): Promise<Paquete>;
}
