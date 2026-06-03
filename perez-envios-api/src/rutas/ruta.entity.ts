import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Paquete } from '../paquetes/paquete.entity';

@Entity('rutas')
export class Ruta { 
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  nombre!: string;

  @Column()
  codigo!: string;

  @OneToMany(() => Paquete, (paquete) => paquete.ruta)
  paquetes!: Paquete[];
}