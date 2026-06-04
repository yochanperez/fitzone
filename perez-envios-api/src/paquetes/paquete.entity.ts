import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Ruta } from '../rutas/ruta.entity';

@Entity('paquetes')
export class Paquete {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  codigo!: string;

  @Column()
  destinatario!: string;

  @Column('decimal', { precision: 6, scale: 2 })
  peso_kg!: number;

  @Column()
  tipo!: string;

  @Column({ default: 'En bodega' })
  estado!: string;

  @ManyToOne(() => Ruta, (ruta) => ruta.paquetes, { onDelete: 'CASCADE' })
  ruta!: Ruta;
}