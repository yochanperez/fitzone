import { SociosService } from './socios.service';
import { CreateSocioDto } from './dto/create-socio.dto';
import { UpdateSocioDto } from './dto/update-socio.dto';
export declare class SociosController {
    private readonly sociosService;
    constructor(sociosService: SociosService);
    create(createSocioDto: CreateSocioDto): Promise<import("./socio.entity").Socio>;
    findAll(): Promise<import("./socio.entity").Socio[]>;
    findOne(id: string): Promise<import("./socio.entity").Socio>;
    update(id: string, updateSocioDto: UpdateSocioDto): Promise<import("./socio.entity").Socio>;
    remove(id: string): Promise<import("./socio.entity").Socio>;
}
