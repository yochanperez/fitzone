import { Repository } from 'typeorm';
import { Socio } from './socio.entity';
import { Plan } from '../planes/plan.entity';
import { CreateSocioDto } from './dto/create-socio.dto';
import { UpdateSocioDto } from './dto/update-socio.dto';
export declare class SociosService {
    private readonly socioRepository;
    private readonly planRepository;
    constructor(socioRepository: Repository<Socio>, planRepository: Repository<Plan>);
    create(createSocioDto: CreateSocioDto): Promise<Socio>;
    findAll(): Promise<Socio[]>;
    findOne(id: string): Promise<Socio>;
    update(id: string, updateSocioDto: UpdateSocioDto): Promise<Socio>;
    remove(id: string): Promise<Socio>;
}
