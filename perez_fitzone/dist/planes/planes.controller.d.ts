import { PlanesService } from './planes.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
export declare class PlanesController {
    private readonly planesService;
    constructor(planesService: PlanesService);
    create(createPlanDto: CreatePlanDto): Promise<import("./plan.entity").Plan>;
    findAll(): Promise<import("./plan.entity").Plan[]>;
    findOne(id: string): Promise<import("./plan.entity").Plan>;
    update(id: string, updatePlanDto: UpdatePlanDto): Promise<import("./plan.entity").Plan>;
    remove(id: string): Promise<import("./plan.entity").Plan>;
}
