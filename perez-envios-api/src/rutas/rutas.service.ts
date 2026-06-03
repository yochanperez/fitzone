import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ruta } from './ruta.entity'; // Corregido: 'from'
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';

@Injectable()
export class RutasService {
  constructor(
    @InjectRepository(Ruta)
    private readonly rutaRepository: Repository<Ruta> 
  ) {}

  create(createRutaDto: CreateRutaDto) {
    const ruta = this.rutaRepository.create(createRutaDto);
    return this.rutaRepository.save(ruta);
  }

  findAll() {
    return this.rutaRepository.find({ relations: { paquetes: true } });
  }

  async findOne(id: string) {
    const ruta = await this.rutaRepository.findOne({ 
      where: { id }, 
      relations: { paquetes: true } 
    });
    if (!ruta) throw new NotFoundException('Ruta no encontrada');
    return ruta;
  }

  async update(id: string, updateRutaDto: UpdateRutaDto) {
    const ruta = await this.findOne(id);
    Object.assign(ruta, updateRutaDto);
    return this.rutaRepository.save(ruta);
  }

  async remove(id: string) {
    const ruta = await this.rutaRepository.findOne({ 
      where: { id }, 
      relations: { paquetes: true } 
    });
    if (!ruta) throw new NotFoundException('Ruta no encontrada');
    
    if (ruta.paquetes && ruta.paquetes.length > 0) {
      throw new BadRequestException('No se puede eliminar una ruta que tiene paquetes asignados');
    }
    
    return this.rutaRepository.remove(ruta);
  }
}