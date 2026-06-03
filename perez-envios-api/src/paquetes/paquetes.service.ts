import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paquete } from './paquete.entity'; 
import { CreatePaqueteDto } from './dto/create-paquete.dto';
import { UpdatePaqueteDto } from './dto/update-paquete.dto';

@Injectable()
export class PaquetesService {
  constructor(
    @InjectRepository(Paquete)
    private readonly paqueteRepository: Repository<Paquete>,
  ) {}

  async create(createPaqueteDto: CreatePaqueteDto) {
    const { rutaId, ...datosPaquete } = createPaqueteDto;
    const paquete = this.paqueteRepository.create({
      ...datosPaquete,
      ruta: { id: rutaId } as any,
    });
    return this.paqueteRepository.save(paquete);
  }

  findAll() {
    return this.paqueteRepository.find({ relations: { ruta: true } });
  }

  async findOne(id: string) {
    const paquete = await this.paqueteRepository.findOne({
      where: { id },
      relations: { ruta: true },
    });
    if (!paquete) throw new NotFoundException('Paquete no encontrado');
    return paquete;
  }

  async update(id: string, updatePaqueteDto: UpdatePaqueteDto) {
    const paquete = await this.findOne(id);
    const { rutaId, ...datosActualizar } = updatePaqueteDto;
    Object.assign(paquete, datosActualizar);

    if (rutaId) {
      paquete.ruta = { id: rutaId } as any;
    }
    return this.paqueteRepository.save(paquete);
  }

  async remove(id: string) {
    const paquete = await this.findOne(id);
    return this.paqueteRepository.remove(paquete);
  }
}